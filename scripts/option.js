document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['habit', 'savedTemplate'], async function(result) {
    if (result.habit){
      document.getElementById('option-habit-checkbox').setAttribute('checked', true);
    }
    if (result.savedTemplate) {
      document.getElementById('option-template-textarea').value = result.savedTemplate;
    } 
  });

  // 오늘 회고 작성했는지 여부 확인 기능
  document.getElementById('option-habit-checkbox').addEventListener('change', ({target})=>{
    if (target.checked){
      chrome.storage.local.set({"habit": true});
    }else{
      chrome.storage.local.set({"habit": false});
    }
  })

  // 템플릿 저장 버튼 기능
  document.getElementById('option-template-save-button').addEventListener('click', function(){
    const textarea = document.getElementById('option-template-textarea');
    chrome.storage.local.set({savedTemplate: textarea.value});
    alert("템플릿이 저장되었습니다!");  
  })

  //템플릿 리셋 버튼 기능
  document.getElementById('option-template-reset-button').addEventListener('click', function(){
    chrome.storage.local.remove(['savedTemplate']);
    document.getElementById('option-template-textarea').value = '';
    alert("템플릿을 삭제했습니다!");
  })

});
