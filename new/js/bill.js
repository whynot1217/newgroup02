const frugal = {
  name: "알뜰형",
  price: 200000,
  sub_page: 3,
  sub:"알뜰형 포함",
};

const supply = {
  name: "보급형",
  price: 400000,
  sub_page: 5,
  sub:"보급형 포함",
};

const customize = {
  name: "맞춤형",
  price: 900000,
  sub_page: 10,
  sub:"맞춤형 포함",
};

const highEnd = {
  name: "고급형",
  price: 2000000,
  sub_page: 20,
  sub:"고급형 포함",
};

 const first = {
  name: "100MB",
  price: 7000,
};

const second = {
  name: "500MB",
  price: 10000,
};

const third = {
  name: "1GB",
  price: 15000,
};

const fourth = {
  name: "3GB",
  price: 35000,
};


$(document).ready(function () {
  
  $(".bill_select").change(function () {
    let selName = $(this).val();
    $("#price2").val("");
    switch (selName) {
      case "알뜰형":
        $("#quantity2").val("1");
        $("#quantity2").text("");
        $("#sup_price1").val(frugal.name);
        $("#design_sup_price1").val(frugal.sub);
        $("#design_sup_price2").val(frugal.sub);
        $("#program_sup_price1").val(frugal.sub);
        $("#program_sup_price2").val(frugal.sub);
        $("#price2").val(comma(frugal.price));
        $("#sup_price2").val(comma(frugal.price * $("#quantity2").val()));

        $("#design_quantity2").val(frugal.sub_page);

        total();

        break;

      case "보급형":
        $("#quantity2").val("1");
        $("#quantity2").text("");
        $("#sup_price1").val(supply.name);
        $("#design_sup_price1").val(supply.sub);
        $("#design_sup_price2").val(supply.sub);
        $("#program_sup_price1").val(supply.sub);
        $("#program_sup_price2").val(supply.sub);
        $("#price2").val(comma(supply.price));
        $("#sup_price2").val(comma(supply.price * $("#quantity2").val()));

        $("#design_quantity2").val(frugal.sub_page);

        total();
        break;

      case "맞춤형":
        $("#quantity2").val("1");
        $("#quantity2").text("");
        $("#sup_price1").val(customize.name);
        $("#design_sup_price1").val(customize.sub);
        $("#design_sup_price2").val(customize.sub);
        $("#program_sup_price1").val(customize.sub);
        $("#program_sup_price2").val(customize.sub);
        $("#price2").val(comma(customize.price));
        $("#sup_price2").val(comma(customize.price * $("#quantity2").val()));

        $("#design_quantity2").val(customize.sub_page);

        total();

        break;

      case "고급형":
        $("#quantity2").val("1");
        $("#quantity2").text("");
        $("#sup_price1").val(highEnd.name);
        $("#design_sup_price1").val(highEnd.sub);
        $("#design_sup_price2").val(highEnd.sub);
        $("#program_sup_price1").val(highEnd.sub);
        $("#program_sup_price2").val(highEnd.sub);
        $("#price2").val(comma(highEnd.price));
        $("#sup_price2").val(comma(highEnd.price * $("#quantity2").val()));

        $("#design_quantity2").val(highEnd.sub_page);

        total();

        break;
	 case "기타":
		$("#quantity2").val("");
        $("#quantity2").text("");
        $("#sup_price1").val();
        $("#design_sup_price1").val("");
        $("#design_sup_price2").val("");
        $("#program_sup_price1").val("");
        $("#program_sup_price2").val("");

		$("#design_sup_price1").text('');
        $("#design_sup_price2").text('');
        $("#program_sup_price1").text('');
        $("#program_sup_price2").text('');

        $("#price2").val();
        $("#sup_price2").val();

		$('.default_sup_price').val("");
		$('.default_sup_price').text("");

        $("#design_quantity2").val("");
		total();

        break;
    }
  });

	/*부가서비스 유지비 (호스팅 포함)*/
  $(".bill_select1").change(function () {
    let selName = $(this).val();

    $("#service_price2").val("");

    switch (selName) {
      case "100MB":
        $("#service_price2").val(comma(first.price));
        $("#service_sup_price2").val(comma(first.price));

        total();

        break;
      case "500MB":
        $("#service_price2").val(comma(second.price));
        $("#service_sup_price2").val(comma(second.price));

        total();

        break;
      case "1GB":
        $("#service_price2").val(comma(third.price));
        $("#service_sup_price2").val(comma(third.price));

        total();

        break;
      case "3GB":
        $("#service_price2").val(comma(fourth.price));
        $("#service_sup_price2").val(comma(fourth.price));

        total();

        break;
    }
  })



  /*테이븦 열 추가*/
  $(".row_add_wrap button").click(function () {
    let btnName = $(this).data("name");

    let elName = "";

    if (btnName == "design") {
      elName = "design"; //디자인 +

		addTr(elName);
		return;

    }else if (btnName == "program") {
      elName = "program"; //프로그램 +

		addTr(elName);
		return;

    }else if (btnName == "service") {
      elName = "service"; //부가서비스 +

		addTr(elName);
		return;

    }else if(btnName == 'default'){
		elName = "default"; //언어 +

		//console.log(elName)
		
		addTr(elName);
		return;
	}
  });

  
  /***************문서 번호 조함 (년도 + 주차 )******************* */
  var result = getWeekNumber(new Date());
  let year = String(result[0]).substring(2, 4);
  //console.log("It's currently week " + result[1] + " of " + year);
  $("#bill_num").val("A" + year + "" + result[1] + "-" + "010101");
  /****************************************************************** */
});

/*테이블 열추가 input, textarea 추가*/
function addTr(elName) {
	 var templateClone = $(`#${elName}_clone_tr`).clone();
	let nameLen = $(`#${elName}_tbl tr`).length + 1;
	let tdInput = templateClone.children("td").children("input, textarea");
	//console.log(nameLen);

	templateClone.attr("id", "");
	templateClone.attr("id", elName + "_tr" + nameLen);

	templateClone.children("td").children("").attr("value", "");
	templateClone.children("td").children("").text("");

	tdInput.eq(0).attr("name", elName + "_sort" + nameLen);
	tdInput.eq(0).attr("id", elName + "_sort" + nameLen);

	tdInput.eq(1).attr("name", elName + "_func" + nameLen);
	tdInput.eq(1).attr("id", elName + "_func" + nameLen);

	tdInput.eq(2).attr("name", elName + "_ment" + nameLen);
	tdInput.eq(2).attr("id", elName + "_ment" + nameLen);

	tdInput.eq(3).attr("name", elName + "_quantity" + nameLen);
	tdInput.eq(3).attr("id", elName + "_quantity" + nameLen);
	
	tdInput.eq(4).attr("name", elName + "_price" + nameLen);
	tdInput.eq(4).attr("id", elName + "_price" + nameLen);

	tdInput.eq(5).attr("name", elName + "_sup_price" + nameLen);
	tdInput.eq(5).attr("id", elName + "_sup_price" + nameLen);
	tdInput.eq(5).addClass("price");
	tdInput.eq(5).text('');
	tdInput.eq(5).val('');

	templateClone.children("td").last().attr("name", elName + "_button" + nameLen);
	templateClone.children("td").last().attr("id", elName + "_button" + nameLen);
	templateClone.children("td").last().append('<button class="remove">삭제</button>');
	
	$(`#${elName}_tbl`).append(templateClone);

	$(`#${elName}_tr${nameLen}`).on("click", ".remove", function () {
		$(this).parent().parent().remove();
		 total();
	});
}

/*원 단위 정규식*/
function comma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  num = num.toString().replace(regexp, ",");
  return num;
}
/**단가 콤마 찍기 */
function transComma() {
  let val = event.target.value;
  val = val.replace(/,/gi, "");
  val = Number(val);

  event.target.value = comma(val);
}

/*texarea height resize */
function resize(obj) {
  obj.style.height = "1px";
  obj.style.height = 12 + obj.scrollHeight + "px";
}

/*수량 변경시 */
function quantityChange(id) {
  let price = 0;
  let valName = "";

  let check = /^[0-9]+$/; //숫자인지 검사
  if (check.test($("#" + id).val())) {

    if (id.includes("design")) {
      price = $("#" + id).parent().siblings().children(".design_price").val();
      valName = "design";
    }else if (id.includes("program")) {
      price = $("#" + id).parent().siblings().children(".program_price").val();
      valName = "program";
    } else if (id.includes("service")) {
      price = $("#" + id).parent().siblings().children(".service_price").val();
      valName = "service";
    } else if (id.includes("default")) {
	 price = $("#" + id).parent().siblings().children(".default_price").val();
	 valName = "default";

	price = price.replace(/,/gi, "");
	price = Number(price);
	let totalPrice = $("#" + id).val() * price;

	$("#" + id).parent().siblings().children(".default_sup_price").val(comma(totalPrice));
	   total();
	   return;
	}

	price = price.replace(/,/gi, "");
	price = Number(price);
	let totalPrice = $("#" + id).val() * price;

    $("#" + id).parent().siblings().children("." + valName + "_sup_price").val(comma(totalPrice));

    //토탈 계산식
    total();
  }
}

/*단가 수정시 */
function priceChange(id) {
  let idNum = "";

  idNum = id.slice(-1, id.length);

  if (id.includes("design")) {
    id = "design_quantity" + idNum;
  } else if (id.includes("program")) {
    id = "program_quantity" + idNum;
  } else if (id.includes("service")) {
    id = "service_quantity" + idNum;
  }else if (id.includes("default")) {
    id = "default_quantity" + idNum;
  }

  quantityChange(id);
}

/**토탈계산 함수 */
function total() {
  let totalPrice = 0; //공급가액(부가세 미포함)
  let check = /^[0-9]/g; //숫자인지 검사
  var regex = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;

  for (i = 0; i < $(".price").length; i++) {
    let prices = $(".price").eq(i).val();
    prices = prices.replace(/,/gi, "");
    prices = Number(prices);

    totalPrice += prices;
  }
  	vat =  parseInt(totalPrice * 0.1);
    vatPrice = parseInt(totalPrice + (totalPrice * 0.1) ); //부가세 포함 제안가계산

  $("#bill_total_input").val(comma(totalPrice) + "원"); //공급가액(부가세 미포함)
  $("#bill_vat_input").val(comma(vat) + "원"); //부가세
  $("#proposal_bill_input").val(comma(vatPrice) + "원"); //total제안가(부가세 포함)


	//할인률 적용
	$("#bill_discount_input").change(function () {
		const discountAmt =Number($(this).val()); //할인률
		const discountPer = totalPrice * Number('0.' + discountAmt); //할인가
		const discount = parseInt(totalPrice - Number(discountPer)); //할인 적용된 공급가액
		vat=  parseInt(discount * 0.1);//부가세
		vatPrice = parseInt(discount + (discount * 0.1) ); //부가세 포함 제안가계산

		$("#bill_total_input").val(comma(discount) + "원"); //공급가액(부가세 미포함)
		$("#bill_vat_input").val(comma(vat) + "원"); //부가세
		$("#proposal_bill_input").val(comma(vatPrice) + "원"); //total제안가(부가세 포함)

		//부가세 포함 제안가 절사 하기 전 기억해놓기
		rememberTotal();

	});

	//부가세 포함 제안가 절사 하기 전 기억해놓기
	rememberTotal();

	//단위별 절사
  $("#cutoff_btn").change(function () { 

	   if($(this).val() == 0){
			if(vatPrice > 10)
			vatPrice = Math.floor(prevVatPrice/10) * 10;
			$("#proposal_bill_input").val(comma(vatPrice) + "원");

		} else if($(this).val() == 1){
			if(vatPrice > 100)
			vatPrice = Math.floor(prevVatPrice/100) * 100;
			$("#proposal_bill_input").val(comma(vatPrice) + "원");

		} else if($(this).val() == 2){
			if(vatPrice > 1000)
			vatPrice = Math.floor(prevVatPrice/1000) * 1000;
			$("#proposal_bill_input").val(comma(vatPrice) + "원");
			
		} else if($(this).val() == 3){
			if(vatPrice > 10000)
			vatPrice = Math.floor(prevVatPrice/10000) * 10000;
			$("#proposal_bill_input").val(comma(vatPrice) + "원");

		} else if($(this).val() == 4){
			if(vatPrice > 100000)
			vatPrice = Math.floor(prevVatPrice/100000) * 100000;
			$("#proposal_bill_input").val(comma(vatPrice) + "원");

		} else if($(this).val() == 5){
			if(vatPrice > 1000000)
			vatPrice = Math.floor(prevVatPrice/1000000) * 1000000;
			$("#proposal_bill_input").val(comma(vatPrice) + "원");

		} 

  });

}

//부가세 포함 제안가 절사 하기 전 기억해놓기
function rememberTotal() {
	$("#proposal_bill_input").data('val', $("#proposal_bill_input").val());
	prevVatPrice = $("#proposal_bill_input").data('val').replace(/[^0-9]/g, "");
}

//단위별 절사
/*function  changeSelect(vatPrice) {
	var unit = Number($(this).data("unit"));
	if(vatPrice > unit)
		vatPrice = Math.floor(vatPrice/unit) * unit;
		$("#proposal_bill_input").val(comma(vatPrice) + "원");
	
}*/


//주차계산
function getWeekNumber(d) { 
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

  return [d.getUTCFullYear(), weekNo];
}


