function changeIdIndexTo(elem, index){
  return $(elem).attr("id", elem.attr('id').replace(/\d/, index));
}