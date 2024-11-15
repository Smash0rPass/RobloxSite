!function(){"use strict";function m(e){var t=e.users,n=e.onAccountSelection,a=e.disabled,c=e.translate;return h().createElement("ul",{className:"account-selector"},t.map(function(e){return h().createElement(o,{key:e.id,userId:e.id,username:e.name,displayName:e.displayName,onAccountSelection:n,disabled:a,translate:c})}))}var a={n:function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},d:function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},e=Roblox,t=a.n(e),d=React,h=a.n(d),r=ReactDOM,p=ReactStyleGuide,n=ReactUtilities,l=RobloxThumbnails,s="@",e=(e.EnvironmentUrls.universalAppConfigurationApi,{common:["CommonUI.Controls"],feature:"Authentication.OneTimePasscode"}),E={ActionSelect:"Action.Select",LabelBackToLogin:"Label.BackToLogin",ResponseChooseAnotherMethod:"Response.ChooseAnotherMethod"},o=(0,n.withTranslations)(function(e){var t=e.userId,n=e.username,a=e.displayName,c=e.onAccountSelection,o=e.disabled,e=e.translate;return h().createElement("li",{className:"account-selection-list-item"},h().createElement("div",{className:"account-selection"},h().createElement("div",{className:"account-selection-thumbnail"},h().createElement(l.Thumbnail2d,{containerClass:"avatar-card-image",type:l.ThumbnailTypes.avatarHeadshot,targetId:t,size:l.ThumbnailAvatarHeadshotSize.size48})),h().createElement("div",{className:"account-selection-name-container"},h().createElement("p",{className:"account-selection-displayname"},a||n),h().createElement("p",{className:"account-selection-username"},s+n)),!o&&h().createElement("div",{className:"account-selection-button-container"},h().createElement(p.Button,{className:"account-selection-button",variant:"secondary",size:"sm",onClick:function(e){return c(t)}},e(E.ActionSelect)))))},e),i=(0,n.withTranslations)(function(e){function t(){o(),u(!1)}var n=e.users,a=e.invalidUsers,c=e.onAccountSelection,o=e.onAccountSelectorAbandoned,l=e.titleText,s=e.helpText,r=e.translate,i=(0,d.useState)(!0),e=i[0],u=i[1];return h().createElement(p.Modal,{className:"account-selector-modal",show:e,onHide:t,size:"lg"},h().createElement(d.Fragment,null,h().createElement(p.Modal.Header,{className:"account-selector-header",title:l,onClose:t}),h().createElement(p.Modal.Body,null,h().createElement(d.Fragment,null,h().createElement("p",{className:"account-selector-help-text"},s),h().createElement(m,{users:n,onAccountSelection:function(e){c(e),u(!1)},disabled:!1,translate:r}),0<a.length&&h().createElement(d.Fragment,null,h().createElement("p",{className:"account-selector-help-text"},r(E.ResponseChooseAnotherMethod)),h().createElement(m,{users:a,onAccountSelection:function(){},disabled:!0,translate:r}),h().createElement(p.Button,{className:"account-selector-back-button",variant:"secondary",size:"sm",onClick:function(){window.dispatchEvent(new Event("closeEmailVerifyCodeModal")),t()}},r(E.LabelBackToLogin)))))))},e),e={renderAccountSelectorModal:e=function(e){var t=e.containerId,n=e.users,a=e.invalidUsers,c=e.onAccountSelection,o=e.onAccountSelectorAbandoned,l=e.titleText,s=e.helpText,e=e.translate,t=document.getElementById(t);return null!=t&&((0,r.unmountComponentAtNode)(t),(0,r.render)(h().createElement(i,{users:n,invalidUsers:a,onAccountSelection:c,onAccountSelectorAbandoned:o,titleText:l,helpText:s,translate:e}),t),!0)}};Object.assign(t(),{AccountSelectorService:e})}();
//# sourceMappingURL=https://js.rbxcdn.com/1803279f45b121eaa502fc4ba72bffd6-accountSelector.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("AccountSelector");