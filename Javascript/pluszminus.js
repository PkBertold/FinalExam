jQuery(function(){
    var j = jQuery; // jQuery variable
    var addInput = '#qty'; //This is the id of the input you are changing
    var n = 1;
    
    // Az N értékét beállítjuk 1-re
    j(addInput).val(n);
  
    // Hozzáadunk az N-hez 1-et
    j('.plus').on('click', function(){
      j(addInput).val(++n);
    })
  
    j('.min').on('click', function(){
      // Ha az N több mint 1 akkor kivon 1-et
      if (n >= 1) {
        j(addInput).val(--n);
      } else {
        // Ellenkező esetben ne csináljon semmit
      }
    });
  });