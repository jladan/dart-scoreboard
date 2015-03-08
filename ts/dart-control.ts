// <reference path="./_app.ts" />

module dartApp {
    export interface IDartScope extends ng.IScope {
        vm: DartControl;
        score: number;
        dartScore: string;
        previewScore: number;

    }
    export class DartControl {
        public static $inject = [
            '$scope',
        ];

        constructor(private $scope: IDartScope) {
            $scope.vm = this;   // This makes the controller object accessible through the scope
                                // giving access to all the public functions

            $scope.score = 501
            $scope.dartScore = '';
            $scope.$watch('dartScore', (ds) => {
                $scope.previewScore = $scope.score - darts.parse_score(ds);
            });
        }

        submitScore() {
            this.$scope.score -= darts.parse_score(this.$scope.dartScore);
            this.$scope.dartScore = '';
        }

    }
}
