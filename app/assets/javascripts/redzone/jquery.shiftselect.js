jQuery.fn.shiftSelect = function() {
  var checkboxes = this
  var lastSelected
  jQuery(this).click( function(event) {
    if ( !lastSelected ) {
      lastSelected = this
      return;
    }
    if ( event.shiftKey ) {
      var selIndex = checkboxes.index(this)
      var lastIndex = checkboxes.index(lastSelected)
      /*
       * if you find the "select/unselect" behavior unseemly,
       * remove this assignment and replace 'checkValue'
       * with 'true' below.
       */
      var checkValue = lastSelected.checked
      if ( selIndex == lastIndex ) {
        return true
      }
      var end = Math.max(selIndex,lastIndex)
      var start = Math.min(selIndex,lastIndex)
      for(i=start;i<=end;i++) {
        checkboxes[i].checked = checkValue
      }
    }
    lastSelected = this
  })
}
