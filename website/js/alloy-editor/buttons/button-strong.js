YUI.add("button-strong",function(t){"use strict";var o=t.Lang,e=t.Base.create("strong",t.Plugin.Base,[t.ButtonBase],{TPL_CONTENT:'<i class="alloy-editor-icon-bold"></i>',_onClick:function(){var t=this.get("host").get("editor");t.execCommand("bold")}},{NAME:"strong",NS:"strong",ATTRS:{element:{validator:o.isString,value:"strong"},strings:{validator:o.isObject,value:{label:"Bold"}}}});t.ButtonStrong=e},"",{requires:["button-base"]});