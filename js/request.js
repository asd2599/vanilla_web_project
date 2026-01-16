//https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4

async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }

    return response.json();
  });
}
//https://www.dabipyeung.com/baexang_back/product/get_products?cate=dp&limit=8&sort=new

const sliderWrapper = document.querySelector('.swiper-wrapper');
const offersWrapper = document.querySelector('.products');

async function getProducts(n, wrapper) {
  const getProductUrl = `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${n}`;

  try {
    //요청시도
    const data = await getRequest(getProductUrl);
    let dataElement = '';

    data.map((item) => {
      const { pro_img, pro_name, pro_desc } = item;
      dataElement += `
      <div class="swiper-slide">
        <div class="slider-image">
          <img src="images/${pro_img}" alt="slider image" />
        </div>
        <div class="slider-text">
          <h4>${pro_name}</h4>
          <p>
            ${pro_desc}
          </p>
          <a href="#" class="common-button">자세히 보기</a>
        </div>
      </div>                    
      `;
    });

    wrapper.insertAdjacentHTML('beforeend', dataElement);
  } catch (error) {
    //요청시 에러사항
    console.log(`Error : ${error}`);
  }
}

getProducts(3, sliderWrapper);
