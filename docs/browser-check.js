(()=>{
const checks=[];
function check(name,ok){checks.push({name,passed:!!ok});if(!ok)throw new Error(name)}
check('24 題題庫',bank.length===24);
for(let i=0;i<100;i++){startQuiz();check('抽題比例及無重複 '+i,questions.length===10&&new Set(questions.map(q=>q.text)).size===10&&questions.filter(q=>q.topic==='網域').length===4&&questions.filter(q=>q.topic==='DNS').length===3&&questions.filter(q=>q.topic==='URL').length===3)}
go(1);step=0;drawDNS();for(let i=0;i<5;i++)$('#dnsNext').click();check('DNS 成功完成',step===5&&$('#dnsInfo').textContent.includes('網站伺服器回傳'));
$('#dnsCase').value='fail';$('#dnsCase').dispatchEvent(new Event('change'));$('#dnsNext').click();$('#dnsNext').click();check('DNS 查無記錄',step===2&&$('#dnsInfo').textContent.includes('沒有此名稱'));
$('#dnsCase').value='ok';$('#dnsCase').dispatchEvent(new Event('change'));$('#dnsAuto').click();check('自動播放啟動',timer!==null);go(2);check('切換分頁停止播放',timer===null);
$('#urlCheck').click();check('空值提示',$('#urlFeedback').textContent.includes('主機應為'));
$('#protocol').value='https://';$('#host').value='www.example.com';$('#path').value='/storybooks/harry-potter.html';$('#urlCheck').click();check('URL 正確組合',$('#urlFeedback').textContent.startsWith('正確'));
go(3);$('#teacher').checked=true;startQuiz();$('.choices button').click();$('#submit').click();$('#submit').click();check('提交只記錄一次',answers.length===1);check('教師等待揭曉',!$('#reveal').hidden&&$('#nextQ').hidden);$('#reveal').click();check('揭曉後可前進',!$('#nextQ').hidden);
$('#teacher').checked=false;startQuiz();
for(let i=0;i<10;i++){let correct=questions[qi].opts.findIndex(o=>o.correct);$$('.choices button')[correct].click();$('#submit').click();$('#nextQ').click()}
check('全對 100 分',$('#quiz').textContent.includes('100 / 100 分'));check('逐題檢討完整',$$('#review details').length===10);
$('#again').click();check('重新挑戰清除作答',answers.length===0&&qi===0);go(0);
return JSON.stringify({passed:checks.length,failed:0});
})()