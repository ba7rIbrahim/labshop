import Categories from "./Component/Categories";
import Items from "./Component/items";

export default function AdminPannel() {
  return (
    <>
      <button>
        <Categories />
      </button>
      <button>
        <Items />
      </button>
    </>
  );
}
