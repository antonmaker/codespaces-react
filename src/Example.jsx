import menuItems from "./menu-items";
import "./styles.scss";

export default function App() {
  return (
    <div className="yesplz-tree-view">
      <ul>
        <li>
          <span>Women</span>
          <i class="toggler"></i>
          <ul>
            <li>
              <span>Clothing</span>
              <i class="toggler"></i>
              <ul>
                <li>
                  <span>Coats</span>
                </li>
                <li>
                  <span>Jackets</span>
                </li>
                <li>
                  <span>Parkas</span>
                </li>
                <li>
                  <span>Fur & Faux Fur</span>
                </li>
                <li>
                  <span>Knitwear</span>
                </li>
                <li>
                  <span>Tops</span>
                </li>
                <li>
                  <span>Dresses & Jumpsuits</span>
                </li>
                <li>
                  <span>Pants</span>
                </li>
                <li>
                  <span>Skirts</span>
                </li>
                <li>
                  <span>Jeans</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span>Men</span>
          <i class="toggler"></i>
          <ul>
            <li>
              <span>Clothing</span>
              <i class="toggler"></i>
              <ul>
                <li>
                  <span>Coats</span>
                </li>
                <li>
                  <span>Jackets</span>
                </li>
                <li>
                  <span>Parkas</span>
                </li>
                <li>
                  <span>Knitwear</span>
                </li>
                <li>
                  <span>Tops</span>
                </li>
                <li>
                  <span>Shirts</span>
                </li>
                <li>
                  <span>Pants</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
