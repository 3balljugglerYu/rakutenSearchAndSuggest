async function checkSuggestAPI() {
  // jsonPlaceholderのAPIは取得できることを確認
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // 楽天市場で公開されているAPIも取得できることを確認
  // const keyword_KINGDOM = "%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%80%E3%83%A0";
  // const rakutenAppID = "1033602757860476151";
  // const res = await fetch(
  //   // "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%80%E3%83%A0&applicationId=1033602757860476151"
  //   `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=${keyword_KINGDOM}&applicationId=${rakutenAppID}`
  // );

  // 公開されていない楽天サジェストのAPIは取得できない。
  const res = await fetch(
    "https://rdc-api-catalog-gateway-api.rakuten.co.jp/SUI/autocomplete/search_pc?q=%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%80%E3%83%A0&rid=5720795907"
  );

  const json = await res.json();
  const suggestItems = json;
  console.log(suggestItems);
}
checkSuggestAPI();
