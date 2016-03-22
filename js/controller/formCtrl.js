myApp.controller('FormCtrl', function($scope){

	$scope.indexContato = 0;
	$scope.clicouEditar = false;
	$scope.clicouIncluir

	$scope.list = [
		{
			nomePessoa: 'Andreia Detoni',
			emailPessoa: 'andreia.detoni@ciss.com.br',
			phonePessoa: '(46) 35365456'

		},
		{
			nomePessoa: 'Maria',
			emailPessoa: 'maria@gmail.com',
			phonePessoa: '(46) 36356655'

		},
		{
			nomePessoa: 'João',
			emailPessoa: 'joao@gmail.com',
			phonePessoa: '(46) 35812035'

		}
	]

	//Função para cadastrar o contato
	$scope.cadastraContato = function(dataName, dataEmail, dataPhone){
		if(!!dataName,!!dataEmail){
			$scope.list.push({
				nomePessoa: dataName,
				emailPessoa: dataEmail,
				phonePessoa: dataPhone
				
			});

			$scope.name = undefined;
			$scope.email = undefined;
			$scope.phone = undefined;
		}
	};

	//Função para editar o contato
	$scope.editaContato = function(dataindex){
		$scope.clicouEditar = true;
		$scope.indexContato = dataindex;
		$scope.renomearn = $scope.list[dataindex].nomePessoa;
		$scope.renomeare = $scope.list[dataindex].emailPessoa;
		$scope.renomearp = $scope.list[dataindex].phonePessoa;
	};

	//Função para o botão renomear
	$scope.renomearContato = function( novoNome, novoEmail, novoPhone){
		var editObj = {};
		editObj = {
			'nomePessoa' : novoNome,
			'emailPessoa' : novoEmail,
			'phonePessoa' : novoPhone
		}

		$scope.list[$scope.indexContato] = editObj;
		$scope.clicouEditar = false;
	}

	//Função para remover Contato
	$scope.removeContato = function(remove) {
		$scope.list.splice(remove, 1);

	}

	//Função para cancelar a edição
	$scope.cancelarEdicao = function() {
		$scope.clicouEditar = false;	

	}

});
