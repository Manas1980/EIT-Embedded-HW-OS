!function(e){var s=function(e,s,a){var t=function template(i){var a=[],l={},t,n=i||{};return function(n,o,c,s,i,l,p){var d=n.get("metadata.name"),u=o(n.getQuestionCount(),"Question","Questions"),r=c.ceil(100*n.getPassingFraction());a.push('<div data-js="quiz-landing-container" class="c-open-single-page c-quiz-start-page"><div class="bt3-row"><div class="bt3-col-md-9"><h1 class="headline-2-text c-open-single-page-subtitle color-secondary-text">'+e.escape(null==(t=s(n.get("metadata").getTitlePrefix()))?"":t)+'</h1><h2 class="display-2-text color-primary-text c-open-single-page-title">'+e.escape(null==(t=s(d))?"":t)+'</h2><div class="c-open-single-page-description">'),i&&n.hasSubmittedAttempt()?(a.push("<p>"+e.escape(null==(t=s("My Score: #{evaluation.getDisplayScore()}/#{evaluation.get('maxScore')} points",{"evaluation.getDisplayScore()":s(l.getDisplayScore()),"evaluation.get('maxScore')":s(l.get("maxScore"))}))?"":t)+"</p>"),n.isPassed()?a.push('<div data-js="performance-bar-container" class="c-performance-bar-container"></div><div class="c-open-single-page-pass-status body-1-text"><span class="c-open-single-page-pass-label c-passed-label">'+e.escape(null==(t=s("Excellent!"))?"":t)+"</span></div>"):a.push('<div data-js="performance-bar-container" class="c-performance-bar-container c-performance-bar-dim"></div><div class="c-open-single-page-pass-status"><p class="c-open-single-page-fail-label">'+e.escape(null==(t=s("Not yet complete"))?"":t)+"</p></div>")):a.push("<p>"+e.escape(null==(t=s("#{model.getQuestionCount()} #{questionCountPluralized}",{"model.getQuestionCount()":s(n.getQuestionCount()),questionCountPluralized:s(u)}))?"":t)+"</p><p>"+e.escape(null==(t=s("To complete, earn at least #{model.getDisplayPassingPercent()}.",{"model.getDisplayPassingPercent()":s(n.getDisplayPassingPercent())}))?"":t)+"\n</p>"),a.push("</div></div></div>"),p?a.push('<div class="bt3-row"><div data-rc="LockingCover" class="c-locked-container"></div></div>'):i&&n.hasSubmittedAttempt()?(a.push('<div class="c-open-single-page-results">'),n.isPassed()||a.push("<span>"+e.escape(null==(t=s("Score required to pass: #{model.getDisplayPassingPercent()} or higher.",{"model.getDisplayPassingPercent()":s(n.getDisplayPassingPercent())}))?"":t)+"</span><br/>"),a.push('<a data-js="review-button" href="javascript:void(0);" class="nostyle">'+e.escape(null==(t=s("View latest submission"))?"":t)+'</a><div class="bt3-row"><div class="bt3-col-md-9"><br/><button data-js="retake-button" class="passive c-call-to-action-btn">'),n.hasUnsubmittedAttempt()?a.push(""+e.escape(null==(t=s("Resume Quiz"))?"":t)):a.push(""+e.escape(null==(t=s("Retake"))?"":t)),a.push("</button></div></div></div>")):(a.push('<div class="bt3-row c-open-single-page-start-area"><div class="bt3-col-md-4"><button data-js="start-button" class="secondary c-call-to-action-btn">'),i&&n.hasUnsubmittedAttempt()?a.push(""+e.escape(null==(t=s("Resume Quiz"))?"":t)):a.push(""+e.escape(null==(t=s("Start Quiz"))?"":t)),a.push("</button></div></div>")),a.push("</div>")}.call(this,"model"in n?n.model:"undefined"!=typeof model?model:void 0,"pluralize"in n?n.pluralize:"undefined"!=typeof pluralize?pluralize:void 0,"Math"in n?n.Math:"undefined"!=typeof Math?Math:void 0,"_t"in n?n._t:"undefined"!=typeof s?s:void 0,"authenticated"in n?n.authenticated:"undefined"!=typeof authenticated?authenticated:void 0,"evaluation"in n?n.evaluation:"undefined"!=typeof evaluation?evaluation:void 0,"isItemLocked"in n?n.isItemLocked:"undefined"!=typeof isItemLocked?isItemLocked:void 0),a.join("")};return function(e){return e&&"_t"in e&&(s=e._t.merge(s)),t(e)}};"function"==typeof define&&define.amd?define(["js/vendor/jade","i18n!bundles/assess/assessmentTypes/phoenixQuiz/nls/assessment.quiz"],function(e,t){var a;return s(e,t,a)}):e.jade.templates["bundles.assess.assessmentTypes.phoenixQuiz.assessment.quiz"]=s(e.jade.helpers)}(window);