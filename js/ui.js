export class uiData {
  constructor() {
  }
  displayGame(data) {
    let box = ``;
    for (let i = 0; i < data.length; i++) {
      box += `
            <div class="col-lg-3 col-md-6">
                <div data-id="${data[i].id}"  class="card text-white bg-dark">
                    <div class="card-body p-2">
                        <img class="w-100 img-card" src="${data[i].thumbnail}" alt="" />
                        <div class="py-2 d-flex justify-content-between align-items-center">
                            <p>${data[i].title}</p>
                            <p class="text-free p-1 fw-semibold rounded-2">Free</p>
                        </div>
                        <p class="text-center text-white-50 small">
                            ${data[i].short_description}
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <p class="m-0 fw-semibold text-card-footer rounded-2 p-1">
                            ${data[i].genre}
                        </p>
                        <p class="m-0 fw-semibold text-card-footer rounded-2 p-1">
                            ${data[i].platform}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector("#row").innerHTML = box;
  }

  displayDetails(data){
    let boxDetails = `
    <div class="row">
    <div class=" col-md-4">
              <div class="">
            <img class=" w-100" src="${data.thumbnail}" alt="" />
          </div>
      </div>
         <div class=" col-md-8 ">
          <div class="">
                      <p class=" fs-3">title: ${data.title}</p>
          <p class='fs-5'>Category: <span class="bg-info rounded-1 p-1 text-dark fw-semibold span-details">${data.genre}</span></p>
          <p class='fs-5'>Platform: <span class="bg-info rounded-1 p-1 text-dark fw-semibold span-details">${data.platform}</span></p>
          <p class='fs-5'>Status:   <span class="bg-info rounded-1 p-1 text-dark fw-semibold span-details">${data.status}</span></p>
          <p class="description-details">
            ${data.description}
          </p>
          <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning text-white">show game</a>
          </div>
          </div>
        </div>
    `;
      document.querySelector(".contentDetails ").innerHTML = boxDetails;
  }

}

