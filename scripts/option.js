document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['savedTemplate'], async function(result) {
    if (result.savedTemplate) {
      document.getElementById('extension-option-template-textarea').value = result.savedTemplate;
    } 
  });

  // 템플릿 저장 버튼 기능
  document.getElementById('extension-option-template-save-button').addEventListener('click', function(){
    const textarea = document.getElementById('extension-option-template-textarea');
    chrome.storage.local.set({savedTemplate: textarea.value});
    alert("템플릿이 저장되었습니다!");  
  })

  //템플릿 리셋 버튼 기능
  document.getElementById('extension-option-template-reset-button').addEventListener('click', function(){
    chrome.storage.local.remove(['savedTemplate']);
    document.getElementById('extension-option-template-textarea').value = '';
    alert("템플릿을 삭제했습니다!");
  })

});
