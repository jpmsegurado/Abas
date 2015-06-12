app.controller('indexCtrl',['$scope',Ctrl]);

function Ctrl($scope){
    
    $scope.menu = ['Pessoa pessoa pessoa','País','Empresa'];
    
    $scope.tab = -1;
    
    $scope.addAba = function(titulo){
        var aba = {titulo:titulo};
        $scope.abas.push(aba);
        if($scope.abas.length == 1){
            $scope.tab = 0;
        }
    }
    
    $scope.abas = [];
    
    $scope.showTab = function(index){
        $scope.tab = index;
    }
    
    $scope.removeAba = function(index){
        $scope.abas.splice(index,1);
        
    }
    
}