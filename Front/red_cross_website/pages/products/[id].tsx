import Image from 'next/image';
import AppLayout from '../../components/Layout';
import productData, { productType } from '../../DATA/productData';
import * as React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface ProductsIDProps {
  data: productType[];
}

const ProductsID: NextPage<ProductsIDProps> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  const item = data.find((item: productType) => item.id === Number(id));

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <AppLayout type="centered">
      <div className="flex flex-row w-full">
        <div className="w-full grid justify-items-end">
          <Image src={item.image} alt="Picture of the author" width={500} height={500} className="shadow-xl hover:shadow-2xl" />
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productData.map((item: productType) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductsIDProps> = async ({ params }) => {
  const data = productData;

  return {
    props: {
      data,
    },
  };
};

export default ProductsID;
