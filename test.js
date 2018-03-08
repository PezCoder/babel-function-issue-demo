const someCondition = true;
if (someCondition) {
  function insideFunc() {
    console.log('inside func');
  }
}

function someOtherFunc() {
  if (someCondition) {
    insideFunc();
  }
}
