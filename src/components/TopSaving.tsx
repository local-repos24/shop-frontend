import { BarCategory } from "../interfaces/BarCategories";
import '../styles/components/TopSavings.css';

const TopSavings = (props : BarCategory) : JSX.Element => {
    return(
        <div className="top-savings-container">
            <h1>Top Savings</h1>
            <div className="bar-categories" id="scrollbar-savings">
                <div className="category-saving">{props.title} aloejje</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
                <div className="category-saving">{props.title}</div>
            </div>
            <div className="bar-categories-img">
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
            </div>
        </div>
    )
}

export default TopSavings;