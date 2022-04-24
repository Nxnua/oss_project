import React from "react";
import Header from "../../components/header";
import Category from "../../components/category";
import Products from "../../components/products";
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Header />
      <div className="flex space-x-2 justify-center px-4">
        <img
          className="h-28 mt-[280px]"
          src={require(`../../assets/images/heee.png`)}
        />
        <Category img="vegetable" name="Ногоо" />
        <Category img="fruit" name="Жимс" />
        <Category img="product" name="Цагаан идээ" />
        <Category img="meat" name="Мах" />
        <img
          className="h-28 mt-[280px]"
          src={require(`../../assets/images/heee3.png`)}
        />
      </div>
      <div className="flex justify-center">
        <img className="h-28 " src={require(`../../assets/images/heee2.png`)} />
      </div>
      <div className=" max-w-6xl mx-auto">
        <div className="flex space-x-3 mt-10 justify-evenly">
          <img
            className="w-[424px] h-[180px]"
            src={require(`../../assets/images/ad1.png`)}
          />
          <img
            className="w-[424px] h-[180px]"
            src={require(`../../assets/images/ad2.png`)}
          />
        </div>
        <h1 className="mt-24 ml-4 text-xl">Цагаан идээ</h1>
        <div className=" flex flex-wrap ">
          <Products name="Шинэхэн өрөм зарна" img="orom" price="5000₮" />
          <Products name="Ингэний хоормог" img="hoormog" price="3000₮" />
          <Products name="Тараг сүү байнга бөөндөнө" img="milk" price="4000₮" />
          <Products name="Ээзгий зарна" img="eezgii" price="7000₮" />
          <Products
            name="Бүх төрлийн цагаа идээ бөөний үнээр"
            img="tsganidee"
            price="8000₮"
          />
        </div>
        <h1 className="mt-4 ml-4 text-xl">Мах</h1>
        <div className=" flex flex-wrap ">
          <Products name="Адууны мах" img="aduu" price="5000₮" />
          <Products name="Хонины гулууз мах" img="meats" price="3000₮" />
          <Products name="Ямааны мах" img="yamaa" price="4000₮" />
          <Products name="Тэмээний мах" img="temee" price="7000₮" />
          <Products name="Үхрийн мах" img="uher" price="8000₮" />
        </div>
        <h1 className="mt-4 ml-4 text-xl">Хүнсний ногоо</h1>
        <div className=" flex flex-wrap ">
          <Products name="Сэлэнгийн төмс" img="potato" price="5000₮" />
          <Products name="Лууван зарна" img="luuvan" price="3000₮" />
          <Products name="Шинэ байцаа" img="baitsaa" price="4000₮" />
          <Products name="Манжин зарна" img="manjin" price="7000₮" />
          <Products name="Аагтай сонгино" img="songino" price="8000₮" />
        </div>
      </div>
    </div>
  );
};

export default Home;
