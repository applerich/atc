
  $('body').html('<head><script src="https://www.google.com/recaptcha/api.js"></script></head><div class="container" style="text-align: center; border: 2px solid black;"><h3>Add Item To Cart</h3><form action="http://example.net" method="get"><input type="text" name="style" class="form-control" style="width: 100px; border-radius:75px; text-align: center; margin: auto; margin-bottom: 5px" placeholder="SKU"><input placeholder="Quantity" class="form-control" style="width: 100px; margin: auto; border-radius:75px; margin-bottom: 5px" name="quantity"/><input type="text" name="capdupfieldname" class="form-control" style="width: 100px; border-radius: 75px; text-align: center; margin: auto; margin-bottom: 5px" placeholder="Cap Dup"/><select class="form-control" style="width:100px; border-radius:75px; margin: auto; margin-bottom: 5px" name="size"><option value="">Select Size</option><option value="_240">5k</option><option value="_260">6k</option><option value="_310">8k</option><option value="_330">9k</option><option value="_350">10k</option><option value="_530">4</option> <option value="_540">4.5</option> <option value="_550">5</option> <option value="_560">5.5</option> <option value="_570">6</option> <option value="_580">6.5</option> <option value="_590">7</option> <option value="_600">7.5</option> <option value="_610">8</option> <option value="_620">8.5</option> <option value="_630">9</option> <option value="_640">9.5</option> <option value="_650">10</option> <option value="_660">10.5</option> <option value="_670">11</option> <option value="_680">11.5</option> <option value="_690">12</option> <option value="_700">12.5</option> <option value="_710">13</option> <option value="_720">13.5</option> <option value="_730">14</option> <option value="_750">15</option></select><input class="btn btn-primary" type="submit" style="margin-bottom: 5px" type="submit" name="submit_captcha" value="Add To Cart"/><br><br><div class="g-recaptcha" style="margin: auto; display: inline-block; margin-bottom: 5px" async data-sitekey="'+ "6Le4AQgUAAAAAABhHEq7RWQNJwGR_M-6Jni9tgtA" +'"></div><br><input id="sitekey" class="form-control" placeholder="Site Key" style="width: 120px; border-radius: 75px; margin: auto; text-align: center; margin-bottom: 5px"/><button id="atc" style="margin: auto; margin-bottom: 5px" class="btn btn-primary">Change Site Key</button></form></div>')

$('#atc').click(function (event) {
  event.preventDefault()
  // var sitekey = $('#sitekey').val()
  $('.g-recaptcha').attr('data-sitekey', sitekey)
})

//We need to get the captcha value from the input element within an iframe, but we can't just grab the captcha value from the element because we'll get a cross origin error since it's in an iframe. Instead, we can get access to it by making a page submit, then we can collect it from the URI