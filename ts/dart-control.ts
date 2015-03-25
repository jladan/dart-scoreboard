// <reference path="./_app.ts" />

module dartApp {
    export interface IDartScope extends ng.IScope {
        vm: DartControl;
        score: number;
        dartScore: string;
        history: Array<[string,number,number]>;
        preview: number;
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
            $scope.history = [];
            $scope.$watch('dartScore', (ds) => {
                $scope.preview = darts.parse_score(ds);
                $scope.previewScore = $scope.score - $scope.preview
            });
        }

        submitScore() {
            this.$scope.score -= darts.parse_score(this.$scope.dartScore);
            this.$scope.history.push([this.$scope.dartScore, darts.parse_score(this.$scope.dartScore),this.$scope.score]);
            this.$scope.dartScore = '';
        }

    }
}
