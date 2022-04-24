import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Category from "../../components/category";
import Products from "../../components/products";
const Home = () => {
  return (
    <div className="">
      <Header />{" "}
      <div className=" max-w-6xl mx-auto">
        <div className="flex space-x-3 mt-10 justify-between">
          <img src={require(`../../assets/images/ad1.png`)} />
          <img src={require(`../../assets/images/ad2.png`)} />
        </div>
        <div className="flex space-x-4 justify-center mt-16 px-4">
          <Category img="vegetable" name="Ногоо" color="#D3FBD9" />
          <Category img="fruit" name="Жимс" color="#FFE4BD" />
          <Category img="product" name="Цагаан идээ" color="#FDABBA" />
          <Category img="meat" name="Мах" color="#FDF0AB" />
        </div>
        <h1 className="mt-24 ml-4 text-xl">Цагаан идээ</h1>
        <div className=" flex flex-wrap ">
          <Products name="Сэлэнгийн төмс" img="potato" price="5000₮" />
          <Products name="Хонины гулууз мах" img="meats" price="3000₮" />
          <Products name="Тараг сүү байнга бөөндөнө" img="milk" price="4000₮" />
          <Products name="Ноолуур авна" img="nooluur" price="7000₮" />
          <Products
            name="Бүх төрлийн цагаа идээ бөөний үнээр"
            img="tsganidee"
            price="8000₮"
          />
        </div>
        <h1 className="mt-4 ml-4 text-xl">Мах</h1>
        <div className=" flex flex-wrap ">
          <Products name="Сэлэнгийн төмс" img="potato" price="5000₮" />
          <Products name="Хонины гулууз мах" img="meats" price="3000₮" />
          <Products name="Тараг сүү байнга бөөндөнө" img="milk" price="4000₮" />
          <Products name="Ноолуур авна" img="nooluur" price="7000₮" />
          <Products
            name="Бүх төрлийн цагаа идээ бөөний үнээр"
            img="tsganidee"
            price="8000₮"
          />
        </div>
        <h1 className="mt-4 ml-4 text-xl">Хүнсний ногоо</h1>
        <div className=" flex flex-wrap ">
          <Products name="Сэлэнгийн төмс" img="potato" price="5000₮" />
          <Products name="Хонины гулууз мах" img="meats" price="3000₮" />
          <Products name="Тараг сүү байнга бөөндөнө" img="milk" price="4000₮" />
          <Products name="Ноолуур авна" img="nooluur" price="7000₮" />
          <Products
            name="Бүх төрлийн цагаа идээ бөөний үнээр"
            img="tsganidee"
            price="8000₮"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
