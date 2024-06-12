import { Book } from "@/types";
import SingleBook from "./components/SingleBook";
import { Suspense } from "react";
import Loading from "./components/Loading";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  //   console.log("Params", params);
  let singleBookData: Book | null = null;
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookId}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // console.log("Response : ", response);
    const data = await response.json();
    if (!data) {
      throw new Error("Book not found");
    }

    singleBookData = data.book;

    // console.log("Data : ", singleBookData);
  } catch (err: any) {
    throw new Error("Error fetching book");
  }
  if (!singleBookData) {
    throw new Error("Book not found");
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <SingleBook book={singleBookData} />
      </Suspense>
    </div>
  );
};

export default SingleBookPage;
