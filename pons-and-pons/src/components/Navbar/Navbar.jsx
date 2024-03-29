import "./Navbar.scss";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleNav = (ev) => {
        ev.preventDefault();
        const to = ev.target.value;
        navigate(to);
    }

    return (
        <nav>
            {/* DARK LOGO */}
            <Link to='/home'>
                <svg id="logo-dark" width="309" height="52" viewBox="0 0 309 52" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="309" height="51.5001" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_335_1133" transform="scale(0.00191571 0.0114943)" />
                        </pattern>
                        <image id="image0_335_1133" width="522" height="87" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgoAAABXCAMAAABSkJ1nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvpQTFRFycnJJSUl9vb2cHBwpaWlEBAQ9/f3+Pj4wMDAgICABgYGSUlJ8vLyU1NTAgIC/f39ODg4ExMTPDw8/Pz8BAQE7OzspKSk5OTk+vr629vbCAgI0NDQAwMDKioqkJCQQEBA8PDw+fn59fX1AQEBHBwc4ODgDAwM7e3tCwsLGBgYBwcHBQUF9PT0Li4u7u7uR0dHCgoK1NTUQkJC+/v7Hx8fDg4OICAgyMjIFRUVPz8/REREIiIiEhISoKCgy8vL6+vrPj4+TExM7+/v5ubmu7u76OjoOjo6Nzc3zc3NDQ0NkpKSvb29JCQkGxsbioqK0dHRXl5e2traMTEx4+PjzMzMuLi4CQkJdnZ2hYWFd3d3VVVVHh4eKCgoFBQUQ0ND4uLi1tbW3Nzczs7O6enpPT09lpaWjo6O19fXZ2dn8fHxf39/OTk5z8/PtLS0sbGxJycnXFxcn5+fenp6m5ub5+fnRUVFp6en2dnZNTU1ra2tGRkZLCwsERERe3t7VFRUysrKKSkp3t7eMzMzXV1d1dXVxsbG39/f3d3dg4ODlJSUnZ2dLy8vMjIyJiYmFxcXk5OTjY2Nbm5ucnJymZmZiYmJWlpaW1tbgYGBUlJSDw8PwsLCvr6+qqqqxMTEtra2ZmZmX19foqKirq6uV1dXampqZWVlaWlpYGBg8/PzUFBQeXl5Ghoa4eHh09PTsrKys7OzFhYWTU1NSEhItbW1w8PDa2tr0tLSeHh4T09P5eXl6urqVlZWhoaGxcXFOzs7t7e3Y2Njh4eHjIyMWVlZq6urpqamnJycWFhYLS0tfn5+np6eS0tLHR0dYmJii4uLsLCwTk5OUVFRqampbGxsIyMjj4+PdXV1RkZGv7+/dHR0c3NzNDQ0ZGRkKysrubm5goKCl5eXbW1to6Ojurq6MDAwcXFxNjY2rKysvLy8wcHBQUFBr6+voaGhaGholZWVmpqafX19YWFhkZGRx8fHiIiISkpKhISEfHx8mJiYISEh2NjYqKioAAAA////AuIq4AAAAP50Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDY2QxxAAAVLElEQVR42uydd1wTyRfAIWoi0UvEBIiISuggHURA6QgIVhRBQMXee+/17L333nvv9exdz3bnnd5Zrvdefrufzy/ZndlsmYTdsAHWY/6D2TZvvjPz3pv3JnZ4RakoRLGrEEFFqUCholSgUFEqUKgoFShYKPLj93+65OCQ131A2+AKFP6zRT0ybmqh/dvssQWumMqvQ6MJtyarK1D4DxZZv2OPOyT2ONfZpU1Y6qU6SsxQChfP0Px3UYh/XolHaX920xrv3u9QyzV2Z/zqP2tLdXzgkjlaIwx7/uwq8EkZfORX6cTvs6u6VFeXaxTi6mM8i8/5n4+/KyTozjbGQvvo6f863YtoparvdGGPcuYrP6xKzImwdwMFQ1HW2697F0hIicWwBkPZE8VMspH23jZCwVDqx17QlVsUes7KG66lPtXPnlMezw+gtaVp0j7pq1besZ4YVknO/ndwPtnGWEFrxL+ZM2OVpqmzGUeAzQ4q6QI8maEupygYSvIg6kNjanHKyIzUHy97mXC446yQOAlOywzN+KcTt6JNc3KN6BMh7IHuy1VQOiH7OAJs3TbryZlIkwAfb1KUWxTwYQ3gZ1Yzc2HXEdVWUZNc+2RJk6D/1DgLOqCqrpEd1jhV4CNnPIbCeU+GvuLU2iQfeE3AI1n5NSZbFYeCYSXNmgsvUi0PlDIKg10NbXBFKnCBc8gWHhZqUk4tDgVDuWBPTQy9yi8Kg7XFooDjHosoFvIlbH3ro4xNmOOLrOzjSer6Qh0u3XmggLtvo5SyXEV5RSHHhwcKuOxTqP+4LZAuCiOIFkxA90UWKQjVrwIfOoAPCnjvXChA19flFYWspnxQwN3vQqzHDJMsCiuJBmxFVzbxItuXL/ChWbxQwKsP8gTXje1ZTlGwq8ILBdypI7XaSdWMiCDH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" />
                    </defs>
                </svg>
            </Link>

            <ul>
                <li>
                    <a href="">ABOUT US</a>
                </li>
                <li>
                    <Link to='/profile'>
                        {/* USER SVG */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 
                                14.21 4 12 4ZM14.1 8C14.1 6.84 13.16 5.9 12 5.9C10.84 5.9 9.9 6.84 9.9 8C9.9 9.16 10.84 10.1 12 10.1C13.16 10.1 14.1 9.16 14.1 
                                8ZM18.1 17C18.1 16.36 14.97 14.9 12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17ZM4 17C4 14.34 9.33 13 12 13C14.67 13 20 14.34 20 
                                17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17Z" fill="#2C2C2C" />
                        </svg>
                    </Link>
                </li>
                <li>
                    {/* SHOPPING CART SVG */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.0972 8.5C14.0972 9.05 13.6472 9.5 13.0972 9.5C12.5472 9.5 12.0972 9.05 
                    12.0972 8.5V6.5H10.0972C9.54717 6.5 9.09717 6.05 9.09717 5.5C9.09717 4.95 9.54717 4.5 10.0972 4.5H12.0972V2.5C12.0972 1.95 
                    12.5472 1.5 13.0972 1.5C13.6472 1.5 14.0972 1.95 14.0972 2.5V4.5H16.0972C16.6472 4.5 17.0972 4.95 17.0972 5.5C17.0972 6.05 
                    16.6472 6.5 16.0972 6.5H14.0972V8.5ZM6.10717 20.5C6.10717 19.4 6.99717 18.5 8.09717 18.5C9.19717 18.5 10.0972 19.4 10.0972 
                    20.5C10.0972 21.6 9.19717 22.5 8.09717 22.5C6.99717 22.5 6.10717 21.6 6.10717 20.5ZM18.0972 18.5C16.9972 18.5 16.1072 19.4 
                    16.1072 20.5C16.1072 21.6 16.9972 22.5 18.0972 22.5C19.1972 22.5 20.0972 21.6 20.0972 20.5C20.0972 19.4 19.1972 18.5 18.0972 
                    18.5ZM16.6472 13.5H9.19717L8.09717 15.5H19.0972C19.6472 15.5 20.0972 15.95 20.0972 16.5C20.0972 17.05 19.6472 17.5 19.0972 
                    17.5H8.09717C6.57717 17.5 5.61717 15.87 6.34717 14.53L7.69717 12.09L4.09717 4.5H3.09717C2.54717 4.5 2.09717 4.05 2.09717 
                    3.5C2.09717 2.95 2.54717 2.5 3.09717 2.5H4.73717C5.11717 2.5 5.47717 2.72 5.63717 3.07L9.62717 11.5H16.6472L20.0372 
                    5.37C20.2972 4.89 20.9072 4.72 21.3872 4.98C21.8672 5.25 22.0472 5.86 21.7772 6.34L18.3972 12.47C18.0572 13.09 17.3972 13.5 
                    16.6472 13.5Z" fill="#2C2C2C" />
                    </svg>
                </li>
                <li>
                    <button onClick={handleNav} value='/account/signin'>shop</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;