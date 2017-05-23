webpackJsonp(["app/js/task-manage/create/index"],{"4e68e437f5b716377a9d":function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TaskListHeaderFixed=e.updateTaskNum=e.TabChange=e.showSettings=e.unpublishTask=e.publishTask=e.deleteTask=e.publishCourse=e.deleteCourse=e.closeCourse=e.taskSortable=e.sortablelist=void 0;var i=s("b334fd7e4c5a19234db2"),a=n(i),r=s("8f840897d9471c8c1fbd"),o=n(r),l=e.sortablelist=function(t){var e=$(t),s=e.sortable("serialize").get();$.post(e.data("sortUrl"),{ids:s},function(t){var s=0,n=0,i=0;e.find(".task-manage-item").each(function(){var t=$(this);t.hasClass("js-task-manage-item")?(s++,t.find(".number").text(s)):t.hasClass("task-manage-unit")?(i++,t.find(".number").text(i)):t.hasClass("task-manage-chapter")&&(n++,i=0,t.find(".number").text(n))}),e.trigger("finished")})};e.taskSortable=function(t){$(t).length&&(0,o.default)({element:t,ajax:!1},function(e){l(t)})},e.closeCourse=function(){$("body").on("click",".js-close-course",function(t){var e=$(t.currentTarget);confirm(Translator.trans("是否确定关闭该教学计划？"))&&$.post(e.data("check-url"),function(t){t.warn&&!confirm(Translator.trans(t.message))||$.post(e.data("url"),function(t){t.success?((0,a.default)("success","关闭成功"),location.reload()):(0,a.default)("danger","关闭失败："+t.message)})})})},e.deleteCourse=function(){$("body").on("click",".js-delete-course",function(t){confirm(Translator.trans("是否确定删除该教学计划？"))&&$.post($(t.currentTarget).data("url"),function(t){t.success?((0,a.default)("success","删除成功"),location.reload()):(0,a.default)("danger","删除失败："+t.message)})})},e.publishCourse=function(){$("body").on("click",".js-publish-course",function(t){confirm(Translator.trans("是否确定发布该教学计划？"))&&$.post($(t.target).data("url"),function(t){t.success?((0,a.default)("success","发布成功"),location.reload()):(0,a.default)("danger","发布失败："+t.message,5e3)})})},e.deleteTask=function(){$("body").on("click",".delete-item",function(t){if("task"==$(t.currentTarget).data("type")){if(!confirm(Translator.trans("是否确定删除该任务吗？")))return}else if("chapter"==$(t.currentTarget).data("type")&&!confirm(Translator.trans("是否确定删除该章节吗？")))return;$.post($(t.currentTarget).data("url"),function(e){e.success?((0,a.default)("success","删除成功"),$(t.target).parents(".task-manage-item").remove(),l("#sortable-list"),$("#sortable-list").children("li").length<1&&$(".js-task-empty").hasClass("hidden")&&$(".js-task-empty").removeClass("hidden"),document.location.reload()):(0,a.default)("danger","删除失败："+e.message)})})},e.publishTask=function(){$("body").on("click",".publish-item",function(t){$.post($(t.target).data("url"),function(e){if(e.success){var s=$(t.target).closest(".task-manage-item");(0,a.default)("success","发布成功"),$(s).find(".publish-item").addClass("hidden"),$(s).find(".delete-item").addClass("hidden"),$(s).find(".unpublish-item").removeClass("hidden"),$(s).find(".publish-status").addClass("hidden")}else(0,a.default)("danger","发布失败："+e.message)})})},e.unpublishTask=function(){$("body").on("click",".unpublish-item",function(t){$.post($(t.target).data("url"),function(e){if(e.success){var s=$(t.target).closest(".task-manage-item");(0,a.default)("success","取消发布成功"),$(s).find(".publish-item").removeClass("hidden"),$(s).find(".delete-item").removeClass("hidden"),$(s).find(".unpublish-item").addClass("hidden"),$(s).find(".publish-status").removeClass("hidden")}else(0,a.default)("danger","取消发布失败："+e.message)})})},e.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(t){var e=$(t.currentTarget),s=e.closest(".js-task-manage-item");s.hasClass("active")?s.removeClass("active").find(".js-settings-list").stop().slideUp(500):(s.addClass("active").find(".js-settings-list").stop().slideDown(500),s.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},e.TabChange=function(){$('[data-role="tab"]').click(function(t){var e=$(this);$(e.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},e.updateTaskNum=function(t){var e=$(t);e.on("finished",function(){$("#task-num").text($(t).find('i[data-role="task"]').length)})},e.TaskListHeaderFixed=function(){var t=$(".js-task-list-header");if(t.length){var e=t.offset().top;$(window).scroll(function(s){$(window).scrollTop()>=e?t.addClass("fixed"):t.removeClass("fixed")})}}},"423d5c93d4f10f876e3b":function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}();s("3f693a05af692150f5a7");var r=s("d684b1eba6c0b776a43a"),o=n(r),l="COURSE_BASE_INTRO",d="COURSE_TASK_INTRO",u="COURSE_TASK_DETAIL_INTRO",c="COURSE_LIST_INTRO",f="COURSE_LIST_INTRO_COOKIE",h=function(){function t(){var e=this;i(this,t),this.intro=null,this.customClass="es-intro-help multistep",$("body").on("click",".js-skip",function(t){e.intro.exit()})}return a(t,[{key:"introType",value:function(){return this.isTaskCreatePage()?void this.initTaskCreatePageIntro():this.isCourseListPage()?void this.initCourseListPageIntro():void this.initNotTaskCreatePageIntro()}},{key:"isCourseListPage",value:function(){return!!$("#courses-list-table").length}},{key:"isTaskCreatePage",value:function(){return!!$("#step-3").length}},{key:"isInitTaskDetailIntro",value:function(){return $(".js-task-manage-item").attr("into-step-id","step-5"),!!$(".js-settings-list").length}},{key:"introStart",value:function(t){var e=this,s='<i class="es-icon es-icon-close01"></i>';this.intro=introJs(),t.length<2?(s="我知道了",this.customClass="es-intro-help"):this.customClass="es-intro-help multistep",this.intro.setOptions({steps:t,skipLabel:s,nextLabel:"继续了解",prevLabel:"上一步",doneLabel:s,showBullets:!1,tooltipPosition:"auto",showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:this.customClass}),this.intro.start().onexit(function(){}).onchange(function(){e.intro._currentStep==e.intro._introItems.length-1?$(".introjs-nextbutton").before('<a class="introjs-button  done-button js-skip">我知道了<a/>'):$(".js-skip").remove()})}},{key:"initTaskCreatePageIntro",value:function(){$(".js-task-manage-item:first .js-item-content").trigger("click"),store.get(l)||store.get(d)?store.get(d)||(store.set(d,!0),this.introStart(this.initTaskSteps())):(store.set(l,!0),store.set(d,!0),this.introStart(this.initAllSteps()))}},{key:"initTaskDetailIntro",value:function(t){store.get(u)||(store.set(u,!0),this.introStart(this.initTaskDetailSteps(t)))}},{key:"initNotTaskCreatePageIntro",value:function(){store.get(l)||(store.set(l,!0),this.introStart(this.initNotTaskPageSteps()))}},{key:"isSetCourseListCookies",value:function(){store.get(c)||o.default.set(f,!0)}},{key:"initCourseListPageIntro",value:function(){var t=this,e=$("#courses-list-table").find("tbody tr").length;2===e&&!store.get(c)&&o.default.get(f)&&(o.default.remove(f),new Promise(function(t,e){setTimeout(function(){var e=$(".js-sidenav-course-menu");return e.length?void $(".js-sidenav-course-menu").slideUp(function(){t()}):void t()},100)}).then(function(){setTimeout(function(){t.initCourseListIntro(".js-sidenav")},100)}))}},{key:"initCourseListIntro",value:function(t){store.get(c)||(store.set(c,!0),this.introStart(this.initCourseListSteps(t)))}},{key:"initAllSteps",value:function(){var t=[{intro:'<p class="title">功能升级</p>\n        课程管理功能现已全新升级。'},{element:"#step-1",intro:'<p class="title">计划任务</p>\n        教学内容的编辑、管理请点击左侧“计划任务”的菜单项进入。'},{element:"#step-2",intro:'<p class="title">营销设置</p>\n        在“营销设置”中您可以通过设置决定课程如何销售、如何加入、如何学习。'},{element:"#step-3",intro:'<p class="title">添加任务</p>\n        您可以在这里选择各种不同的教学手段，然后上传文件/设置内容/设置学习完成条件。'}];return this.isInitTaskDetailIntro()&&(t.push({element:'[into-step-id="step-5"]',intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。'}),store.get(u)||store.set(u,!0)),t}},{key:"initNotTaskPageSteps",value:function(){return[{intro:'<p class="title">功能升级</p>\n        课程管理功能现已全新升级。'},{element:"#step-1",intro:'<p class="title">计划任务</p>\n        教学内容的编辑、管理请点击左侧“计划任务”的菜单项进入。'},{element:"#step-2",intro:'<p class="title">营销设置</p>\n        在“营销设置”中您可以通过设置决定课程如何销售、如何加入、如何学习。'}]}},{key:"initTaskSteps",value:function(){var t=[{element:"#step-3",intro:'<p class="title">添加任务</p>\n        您可以在这里选择各种不同的教学手段，然后上传文件/设置内容/设置学习完成条件。'}];return this.isInitTaskDetailIntro()&&(t.push({element:"#step-5",intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。',position:"bottom"}),store.get(u)||store.set(u,!0)),t}},{key:"initTaskDetailSteps",value:function(t){return[{element:t,intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。',position:"bottom"}]}},{key:"initCourseListSteps",value:function(t){return[{element:t,intro:'\n          <p class="title">多个教学计划</p>\n          恭喜你创建了多个教学计划！左侧的功能菜单会有所简化，\n          只会显示课程公共的相关设置。'}]}},{key:"initResetStep",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[{element:".js-intro-btn-group",intro:'<div class="btn-content"><p><a class=\'btn btn-success js-reset-intro '+t+"'>查看引导</a></p>\n        <a class='btn btn-info'>完整教程</a><div>",position:"top"}]}}]),t}();e.default=h},"92bf3ad15db28fd41545":function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s("b4fbf03f4f16003fe503"),o=n(r);s("c220b4deb1a022451352");var l=s("b334fd7e4c5a19234db2"),d=n(l),u=s("423d5c93d4f10f876e3b"),c=n(u),f=s("4e68e437f5b716377a9d"),h=function(){function t(e){i(this,t),this.$element=e,this.$task_manage_content=$("#task-create-content"),this.$task_manage_type=$("#task-create-type"),this.$frame=null,this.$iframe_body=null,this.iframe_jQuery=null,this.iframe_name="task-create-content-iframe",this.mode=this.$task_manage_type.data("editorMode"),this.type=this.$task_manage_type.data("editorType"),this.step=1,this.loaded=!1,this.contentUrl="",this._init(),this._initEvent()}return a(t,[{key:"_initEvent",value:function(){var t=this;$("#course-tasks-submit").click(function(e){return t._onSave(e)}),$("#course-tasks-next").click(function(e){return t._onNext(e)}),$("#course-tasks-prev").click(function(e){return t._onPrev(e)}),"edit"!=this.mode?$(".js-course-tasks-item").click(function(e){return t._onSetType(e)}):$(".delete-task").click(function(e){return t._onDelete(e)})}},{key:"_init",value:function(){this._inItStep1form(),this._renderContent(this.step),"edit"==this.mode&&(this.contentUrl=this.$task_manage_type.data("editorStep2Url"),this.step=2,this._switchPage())}},{key:"_onNext",value:function(t){3!==this.step&&this._validator(this.step)&&(this.step+=1,this._switchPage())}},{key:"_onPrev",value:function(){1===this.step||3==this.step&&!this._validator(this.step)||(this.step-=1,this._switchPage())}},{key:"_onSetType",value:function(t){var e=$(t.currentTarget).addClass("active");e.siblings().removeClass("active");var s=e.data("type");$('[name="mediaType"]').val(s),this.contentUrl=e.data("contentUrl"),this.loaded=this.type===s,this.type=s,this._onNext(t)}},{key:"_onSave",value:function(t){var e=this;if(this._validator(this.step)){$(t.currentTarget).attr("disabled","disabled");var s=$("#step1-form").serializeArray().concat(this.$iframe_body.find("#step2-form").serializeArray()).concat(this.$iframe_body.find("#step3-form").serializeArray());$.post(this.$task_manage_type.data("saveUrl"),s).done(function(t){var n=t.append,i=t.html;e.$element.modal("hide"),$(".js-task-empty").hasClass("hidden")||$(".js-task-empty").addClass("hidden"),n===!1&&document.location.reload();var a=s.find(function(t){return"chapterId"==t.name}),r=0,o=$("#"+a.value),l=null;o.length?(o.nextAll().each(function(){return $(this).hasClass("task-manage-chapter")?($(this).before(i),r=1,(0,f.sortablelist)("#sortable-list"),!1):o.hasClass("task-manage-unit")&&$(this).hasClass("task-manage-unit")?($(this).before(i),r=1,(0,f.sortablelist)("#sortable-list"),!1):void 0}),1!=r&&(l=$(i),$("#sortable-list").append(l),r=1)):(l=$(i),$("#sortable-list").append(l)),e.showDefaultSetting(l),e.initIntro(),(0,f.sortablelist)("#sortable-list")}).fail(function(t){var e="",s=JSON.parse(t.responseText);s.error&&s.error.message&&(e=s.error.message),(0,d.default)("warning","保存出错: "+e),$("#course-tasks-submit").attr("disabled",null)})}}},{key:"initIntro",value:function(){setTimeout(function(){if(1===$(".js-settings-list").length){var t=new c.default;t.initTaskDetailIntro(".js-settings-list")}},500)}},{key:"showDefaultSetting",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.hasClass("js-task-manage-item")&&($(".js-task-manage-item").removeClass("active").find(".js-settings-list").slideUp(),t.addClass("active").find(".js-settings-list").slideDown())}},{key:"_onDelete",value:function(t){var e=this,s=$(t.currentTarget),n=s.data("url");void 0!==n&&confirm(Translator.trans("是否确定删除该任务吗？"))&&$.post(n).then(function(t){(0,d.default)("success","删除成功"),e.$element.modal("hide"),document.location.reload()}).fail(function(t){(0,d.default)("warning","删除失败~~")})}},{key:"_switchPage",value:function(){this._renderStep(this.step),this._renderContent(this.step),this._rendStepIframe(this.step),this._rendButton(this.step),2!=this.step||this.loaded||this._initIframe()}},{key:"_initIframe",value:function(){var t=this,e='<iframe class="'+this.iframe_name+'" id="'+this.iframe_name+'" name="'+this.iframe_name+'" scrolling="no" src="'+this.contentUrl+'"></iframe>';this.$task_manage_content.html(e).show(),this.$frame=$("#"+this.iframe_name).iFrameResize();var s=function(){t.loaded=!0;var e={};t.iframe_jQuery=t.$frame[0].contentWindow.$,t.$iframe_body=t.$frame.contents().find("body").addClass("task-iframe-body"),t._rendButton(2),t.$iframe_body.find("#step2-form").data("validator",e),t.$iframe_body.find("#step3-form").data("validator",e)};this.$frame.load((0,o.default)(s,this.$task_manage_content))}},{key:"_inItStep1form",value:function(){var t=$("#step1-form"),e=t.validate({rules:{mediaType:{required:!0}},messages:{mediaType:"请选择%display%"}});t.data("validator",e)}},{key:"_validator",value:function(t){var e=null;if(1===t)e=$("#step1-form").data("validator");else if(this.loaded){var s=this.$iframe_body.find("#step"+t+"-form");e=this.iframe_jQuery.data(s[0],"validator")}return!(e&&!e.form())}},{key:"_rendButton",value:function(t){if(1===t)this._renderPrev(!1),this._rendSubmit(!1),this._renderNext(!0);else if(2===t){if(this._renderPrev(!0),"edit"===this.mode&&this._renderPrev(!1),!this.loaded)return this._rendSubmit(!1),void this._renderNext(!1);this._rendSubmit(!0),this._renderNext(!0)}else 3===t&&(this._renderNext(!1),this._renderPrev(!0))}},{key:"_rendStepIframe",value:function(t){this.loaded&&this.$iframe_body&&(2===t?this.$iframe_body.find(".js-step2-view").addClass("active"):this.$iframe_body.find(".js-step2-view").removeClass("active"),3===t?this.$iframe_body.find(".js-step3-view").addClass("active"):this.$iframe_body.find(".js-step3-view").removeClass("active"))}},{key:"_renderStep",value:function(t){$("#task-create-step").find("li:eq("+(t-1)+")").addClass("doing").prev().addClass("done").removeClass("doing"),$("#task-create-step").find("li:eq("+(t-1)+")").next().removeClass("doing").removeClass("done")}},{key:"_renderContent",value:function(t){1===t?this.$task_manage_type.removeClass("hidden"):this.$task_manage_type.addClass("hidden"),1!==t?this.$task_manage_content.removeClass("hidden"):this.$task_manage_content.addClass("hidden")}},{key:"_renderNext",value:function(t){t?$("#course-tasks-next").removeClass("hidden").removeAttr("disabled"):$("#course-tasks-next").addClass("hidden")}},{key:"_renderPrev",value:function(t){t?$("#course-tasks-prev").removeClass("hidden"):$("#course-tasks-prev").addClass("hidden")}},{key:"_rendSubmit",value:function(t){t?$("#course-tasks-submit").removeClass("hidden"):$("#course-tasks-submit").addClass("hidden")}}]),t}();e.default=h},0:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=s("92bf3ad15db28fd41545"),a=n(i);new a.default($("#modal"))},b4fbf03f4f16003fe503:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=arguments,n=function(t,e){var n=$('<div class="load-animation"></div>');n.prependTo(e).nextAll().hide(),e.append();var i=[],a=t.length;return function(e){return i.push(e),n.hide().nextAll().show(),i.length<a?s.callee:t.apply(null,i)}};e.default=n}});