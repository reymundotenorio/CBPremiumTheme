var vm = '$parent.$parent.$parent.$parent.vm';
(function () {
    angular
        .module('pencilblueApp')
        .run(function (formlyConfig) {
            formlyConfig.setWrapper([
                {
                    name: 'uploadWrapper',
                    templateUrl: 'remote-resume.html'
                },
                {
                    template: '<formly-transclude></formly-transclude><div my-messages="options"></div>',
                    types: ['input', 'checkbox', 'select', 'multiselect', 'textarea', 'radio', 'group']
                },
                {
                    name: 'formattingGroup',
                    templateUrl: 'panel.html'
                },
                {
                    name: 'groupBorder',
                    templateUrl: 'group-border.html'
                }
            ]);
            formlyConfig.setType([
                {
                    name: 'fileUpload',
                    templateUrl: 'file-upload.html',
                    wrapper: ['bootstrapLabel', 'bootstrapHasError', 'uploadWrapper']
                },
                {
                    name: 'privacyTermsCheckbox',
                    templateUrl: 'privacy-terms-checkbox.html'
                },
                {
                    name: 'saPrivacyTermsCheckbox',
                    templateUrl: 'sa-privacy-terms-checkbox.html'
                },
                {
                    name: 'satnPrivacyTermsCheckbox',
                    templateUrl: 'sa-tn-checkbox.html'
                },
                {
                    name: 'saSwedenPULCheckbox',
                    templateUrl: 'sa-sweden-PUL-checkbox.html'
                },
                {
                    name: 'saSaasPPCheckbox',
                    templateUrl: 'sa-pp-checkbox.html'
                },
                {
                    name: 'questionHeading',
                    templateUrl: 'question-heading.html'
                },
                {
                    name: 'groups',
                    templateUrl: 'groups.html'
                },
                {
                    name: 'multiselect',
                    extends: 'select',
                    defaultOptions: {
                        ngModelAttrs: {
                            'true': {
                                value: 'multiple'
                            }
                        }
                    }
                },
                {
                    name: 'googleAutocomplete',
                    templateUrl: 'google-autocomplete.html',
                    wrapper: ['bootstrapLabel', 'bootstrapHasError']
                }
            ]);
        })
        .config(['lkGoogleSettingsProvider', function (lkGoogleSettingsProvider) {
            lkGoogleSettingsProvider.configure({
                apiKey: 'AIzaSyDvOZivtWuzHsjMbhxKyfTysQ0mMybd-_g',
                clientId: '679875415305-7j5b8m50efjoevq9ib12rp397asfabgd.apps.googleusercontent.com',
                scopes: ['https://www.googleapis.com/auth/drive.readonly'],
                locale: 'en',
                features: [''],
                views: [
                    function (picker) {
                        return new picker.DocsView().setMimeTypes('application/vnd.google-apps.document,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document');
                    }]
            });
        }]);
})();
