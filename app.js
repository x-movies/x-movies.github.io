let http = new XMLHttpRequest();

http.open('get', 'products.json', true);

http.send();

http.onload = function() {
    
    if(this.readyState == 4 && this.status == 200 ) {
        
        let products = JSON.parse(this.responseText);
        
        let output = "";
        
        for(let item of products) {
            output += `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card h-100 rounded-0 shadow-0 hover-overlay hover-zoom hover-shadow" style="font-size: .85rem;">
                        <div class="bg-image rounded-2 ripple">
                            <a href="${item.links}" class="text-decoration-none text-white">
                                <img src="${item.image}" class="card-img-top rounded-2" alt="...">
                                <div class="small position-absolute px-2 rounded-2" style="bottom: .5rem; left: .5rem; background-color: rgba(0,0,0,0.75);">
                                    <i class="fas fa-clock"></i> ${item.time}
                                </div>
                                <div class="small position-absolute px-2 rounded-2 fw-bold" style="top: .5rem; right: .5rem; background-color: rgba(0,0,0,0.75); color: orange;">
                                    ${item.graphic}
                                </div>
                            </a>
                        </div>
                        <div class="card-body p-0 py-2">
                            <a href="${item.links}">
                                <h5 class="h6 card-title mb-0">
                                    ${item.title}
                                </h5>
                            </a>
                        </div>
                        <div class="card-footer p-0 py-2 border-0 small">
                            <div class="d-flex">
                                <div class="bg-dark px-2 rounded" style="color: orange">
                                    <i class="fas fa-thumbs-up"></i> ${item.like}
                                </div>
                                <div class="ms-2">
                                    <i class="fas fa-eye"></i> ${item.views}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        document.querySelector(".koch-dragon").innerHTML = output;
        
    }
    
}

let http1 = new XMLHttpRequest();

http1.open('get', 'products-3.json', true);

http1.send();

http1.onload = function() {
    
    if(this.readyState == 4 && this.status == 200 ) {
        
        let products = JSON.parse(this.responseText);
        
        let output = "";
        
        for(let item of products) {
            output += `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card h-100 rounded-0 shadow-0 hover-overlay hover-zoom hover-shadow" style="font-size: .85rem;">
                        <div class="bg-image rounded-2 ripple">
                            <a href="${item.links}" class="text-decoration-none text-white">
                                <img src="${item.image}" class="card-img-top rounded-2" alt="...">
                                <div class="small position-absolute px-2 rounded-2" style="bottom: .5rem; left: .5rem; background-color: rgba(0,0,0,0.75);">
                                    <i class="fas fa-clock"></i> ${item.time}
                                </div>
                                <div class="small position-absolute px-2 rounded-2 fw-bold" style="top: .5rem; right: .5rem; background-color: rgba(0,0,0,0.75); color: orange;">
                                    ${item.graphic}
                                </div>
                            </a>
                        </div>
                        <div class="card-body p-0 py-2">
                            <a href="${item.links}">
                                <h5 class="h6 card-title mb-0">
                                    ${item.title}
                                </h5>
                            </a>
                        </div>
                        <div class="card-footer p-0 py-2 border-0 small">
                            <div class="d-flex">
                                <div class="bg-dark px-2 rounded" style="color: orange">
                                    <i class="fas fa-thumbs-up"></i> ${item.like}
                                </div>
                                <div class="ms-2">
                                    <i class="fas fa-eye"></i> ${item.views}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        document.querySelector(".version-khmer").innerHTML = output;
        
    }
    
}