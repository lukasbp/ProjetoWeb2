createDish(){
	$.ajax({
  accepts: {
    mycustomtype: 'XML/XHTML'
  },
  converters: {
  mycustomtype : createDish(String) {
      return 'Dishes.xml';
    }
  },
  dataType: 'mycustomtype'
});

}
