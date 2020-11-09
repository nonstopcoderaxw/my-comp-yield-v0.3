const constants_urls = {
    etherscan: "https://etherscan.io/address/"
}

const constants_addresses = {
    CompFarmingSummaryProxy: "0x2bDC38f7Fc252e2632c6006271c90492a6b1acf0"
}

const web3 = new Web3(window.ethereum);


const constants_abi = {}
var compFarmingSummary_contractInstance;
var account;

var data = {
    annualCOMPAmount: null,
    COMPPrice: null,
    predictedCOMPValueInUSD: null,
    COMPBalance: null,
    COMPYetToClaim: null,
    totalCOMP: null,
    currentCOMPValueInUSD: null,
    sortedCOMPSpeedList: []

}

main();

async function main(){
    await loadABI();
    initEthereum();
    initChartJS();
    await initContracts();
    await pageOnLoad();
    await retStats();
    UIDisplayData();

}

async function loadABI(){
    var compFarmingSummary_abi = await $.getJSON("./contracts/CompFarmingSummaryV1.json");
    constants_abi["CompFarmingSummary"] = compFarmingSummary_abi.abi;
}

async function connectToMetaMask(){

    try{
        await window.ethereum.enable();
        var _accounts = await web3.eth.getAccounts();
        console.log("Connected to this account: ", _accounts);

        //refresh the page - change the account
        changeOfAccount(_accounts);


    }catch(e){
        console.log("connection failed!");
    }
}

async function changeOfAccount(newAccount){
    //update url
    window.location.href = "#" + newAccount;
    window.location.reload();

}

async function UIDisplayData(){
    //COMP Earnings Prediction
    $("#annualCOMPAmount").html(data.annualCOMPAmount + " COMP");
    $("#COMPPrice").html(data.COMPPrice + " USD");
    $("#COMPValueInUSD").html(data.predictedCOMPValueInUSD + " USD");

    //Current COMP Profile
    $("#totalCOMP").html("Total " + data.totalCOMP + " COMP");
    $("#currentCOMPValueInUSD").html(data.currentCOMPValueInUSD + " USD");
    createCOMPProfileChart();
    createCOMPSpeedDOM();

}

async function retStats(){
    //connect to SC
    await Promise.all([retAnnualCOMPAmount(), retCOMPPrice(), retCompProfile(), retCOMPSpeedsByMarket()]);
    calCOMPValueInUSD();

}


async function pageOnLoad(){

    await retrAccount();

    if(account){
        window.location.href = "#" + account;
        $("#connectedAccount").html(account);
        $("#connectedAccount").attr("target", "_blank");
        $("#connectedAccount").attr("href", constants_urls.etherscan + account);
        $("#overlay").fadeOut(700);
    }else{
        $("#overlay").show();
    }

}

async function initEthereum(){
    ethereum.autoRefreshOnNetworkChange = false;
}

async function initContracts(){
    compFarmingSummary_contractInstance = new web3.eth.Contract(constants_abi["CompFarmingSummary"], constants_addresses.CompFarmingSummaryProxy);
}

async function retAnnualCOMPAmount(){
    //data.annualCOMPAmount
    var result = await compFarmingSummary_contractInstance.methods.totalCompIncomePerYear(account).call();

    if(result[0] == 0){
        data.annualCOMPAmount = roundMantissa(result[2], 18, 2);
    }else{
        console.log("err at retAnnualCOMPAmount: ",  result[0] + result[1]);
    }

}

async function retCOMPPrice(){
    var result = await compFarmingSummary_contractInstance.methods.getPriceCOMP().call();

    data.COMPPrice = roundMantissa(result, 6, 2);

}

async function retCOMPSpeedsByMarket(){
    var result = await compFarmingSummary_contractInstance.methods.sortedCompDistSpeedAllMarkets().call();

    var sortedMarkets = result[0];
    var sortedCOMPSpeed = result[1];

    var fullFigure = sortedCOMPSpeed[0];

    for(var i = 0; i < sortedMarkets.length; i++){
        data.sortedCOMPSpeedList.push({
            market: sortedMarkets[i],
            COMPSpeed: roundMantissa(sortedCOMPSpeed[i], 18, 8),
            percentage: (sortedCOMPSpeed[i] / fullFigure).toFixed(2) * 100 + "%"
        });
    }

}

async function calCOMPValueInUSD(){
    data.predictedCOMPValueInUSD = parseFloat((data.annualCOMPAmount * data.COMPPrice).toFixed(2));
}

async function retCompProfile(){
    var result = await compFarmingSummary_contractInstance.methods.compProfile(account).call();

    data.COMPBalance = roundMantissa(result[0], 18, 2);
    data.COMPYetToClaim = roundMantissa(result[1], 18, 2);
    data.totalCOMP = (data.COMPBalance + data.COMPYetToClaim).toFixed(2);
    data.currentCOMPValueInUSD = parseFloat((parseFloat(data.totalCOMP) * data.COMPPrice).toFixed(2));



}

async function retrAccount(){
    var url = window.location.href;
    if(url.indexOf("#") >= 0){
        account = window.location.href.split("#")[1];
    }

    if(!account){
        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
    }
}

function roundMantissa(numberMantissa, mantissaScale, scale){
    return parseFloat((numberMantissa / 10**mantissaScale).toFixed(scale));
}

function createCOMPSpeedDOM(){
    var template = '<h4 class="small font-weight-bold">{{market}} <span class="float-right">{{COMPSpeed}}</span></h4><div class="progress mb-4"><div class="progress-bar {{barBGColor}}" role="progressbar" style="width: {{percentage}}" aria-valuenow="{{percentage}}" aria-valuemin="0" aria-valuemax="100"></div></div>';

    var elements = "";
    for(var i = 0; i < data.sortedCOMPSpeedList.length; i++){
        var element = template.replaceAll("{{market}}", data.sortedCOMPSpeedList[i].market)
                              .replaceAll("{{COMPSpeed}}", data.sortedCOMPSpeedList[i].COMPSpeed)
                              .replaceAll("{{percentage}}", data.sortedCOMPSpeedList[i].percentage);

        if(i == 0){
            element = element.replaceAll("{{barBGColor}}", "bg-success");
        }else{
            element = element.replaceAll("{{barBGColor}}", "bg-warning");
        }

        elements = elements + element;
    }

    $("#COMPSpeed").html(elements);

}


function initChartJS(){
    Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#858796';
}


function createCOMPProfileChart(){
      var ctx = document.getElementById("myPieChart");
      var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["COMP Earned", "COMP accured yet to claim"],
          datasets: [{
            data: [data.COMPBalance, data.COMPYetToClaim],
            backgroundColor: ['#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#17a673', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 0,
        },
      });
}
