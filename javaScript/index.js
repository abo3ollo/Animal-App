// html elements
const search = document.querySelector("#search")
const submit = document.querySelector("#submit")
const result = document.querySelector("#result")

// console.log(search,submit,result);



// variables

const BASE_URL = "https://api.api-ninjas.com/v1/animals"
const API_KEY = "10qJKEdfGkdBvmqPOt0n2g==pw68chEFFYJsBbKg"

// functions

async function fetchAnimal(name) {
    const response = await fetch(`${BASE_URL}?name=${name}`, {
        headers: { "X-Api-Key": API_KEY }
    })
    const data = await response.json()
    console.log(data[0]);

    return data[0]

}
fetchAnimal("dog")


async function getAnimal() {
    const animalname = search.value
    if (!animalname) {
        result.innerHTML = `<div class="text-center mt-4 fs-2">Please enter an animal name. </div>`
        return
    }
    result.innerHTML = `<div class="text-center mt-4 fs-2">
    <span class="loader"></span>
    </div>`

    const animalData = await fetchAnimal(animalname)
    display(animalData)
}

function display(animal) {
    if (!animal) {
        result.innerHTML = `<div class="text-center mt-4 fs-2">No animal found.</div>`
        return

    }
    result.innerHTML = `<div class="animal-card w-50">
                            <div class="card-header mb-5">
                                <h1 class="w-75 m-1 fs-2 text-black">${animal.name}</h1>
                                <div class="scientific_name text-black px-4">${animal.taxonomy?.scientific_name || "unknown"}</div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 mb-5">
                                        <div class="info-item w-75 d-flex align-items-center ">
                                            <div class="icon  me-3"><i class="icon-color fa-solid fa-earth-americas"></i></div>
                                            <div>
                                                <div class="info-label">habitat</div>
                                                <div class="info-value">${animal.characteristics?.habitat || "unknown"}</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-12 mb-5">
                                        <div class="info-item w-75 d-flex align-items-center ">
                                            <div class="icon me-3"><i class="icon-color fa-solid fa-carrot"></i></div>
                                            <div>
                                                <div class="info-label">diet</div>
                                                <div class="info-value">${animal.characteristics?.diet || "unknown"}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-5">
                                        <div class="info-item w-75 d-flex align-items-center">
                                            <div class="icon me-3"><i class="icon-color fa-solid fa-hourglass"></i></div>
                                            <div>
                                                <div class="info-label">lifespan</div>
                                                <div class="info-value">${animal.characteristics?.lifespan || "unknown"}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-5">
                                        <div class="info-item w-75 d-flex align-items-center">
                                            <div class="icon me-3"><i class="icon-color fa-solid fa-gauge-simple-high"></i></div>
                                            <div>
                                                <div class="info-label">top_speed</div>
                                                <div class="info-value">${animal.characteristics?.top_speed || "unknown"}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> `

}

// event

submit.addEventListener("click", getAnimal)