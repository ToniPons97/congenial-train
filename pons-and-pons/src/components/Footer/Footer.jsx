import './Footer.scss';

import igIcon from '../../assets/icons/instagram-icon.png';
import fbIcon from '../../assets/icons/facebook-icon.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <div>
                    <p id="join">Join the family & get 15% off your first order!</p>
                    <div className="footer-input">
                        <input type="email" placeholder="YOUR EMAIL" />
                            <button>SUBSCRIBE NOW</button>
                    </div>
                </div>
                <div>
                    <svg id="logo-dark" width="309" height="52" viewBox="0 0 309 52" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="309" height="51.5001" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_335_1133" transform="scale(0.00191571 0.0114943)" />
                            </pattern>
                            <image id="image0_335_1133" width="522" height="87" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgoAAABXCAMAAABSkJ1nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvpQTFRFycnJJSUl9vb2cHBwpaWlEBAQ9/f3+Pj4wMDAgICABgYGSUlJ8vLyU1NTAgIC/f39ODg4ExMTPDw8/Pz8BAQE7OzspKSk5OTk+vr629vbCAgI0NDQAwMDKioqkJCQQEBA8PDw+fn59fX1AQEBHBwc4ODgDAwM7e3tCwsLGBgYBwcHBQUF9PT0Li4u7u7uR0dHCgoK1NTUQkJC+/v7Hx8fDg4OICAgyMjIFRUVPz8/REREIiIiEhISoKCgy8vL6+vrPj4+TExM7+/v5ubmu7u76OjoOjo6Nzc3zc3NDQ0NkpKSvb29JCQkGxsbioqK0dHRXl5e2traMTEx4+PjzMzMuLi4CQkJdnZ2hYWFd3d3VVVVHh4eKCgoFBQUQ0ND4uLi1tbW3Nzczs7O6enpPT09lpaWjo6O19fXZ2dn8fHxf39/OTk5z8/PtLS0sbGxJycnXFxcn5+fenp6m5ub5+fnRUVFp6en2dnZNTU1ra2tGRkZLCwsERERe3t7VFRUysrKKSkp3t7eMzMzXV1d1dXVxsbG39/f3d3dg4ODlJSUnZ2dLy8vMjIyJiYmFxcXk5OTjY2Nbm5ucnJymZmZiYmJWlpaW1tbgYGBUlJSDw8PwsLCvr6+qqqqxMTEtra2ZmZmX19foqKirq6uV1dXampqZWVlaWlpYGBg8/PzUFBQeXl5Ghoa4eHh09PTsrKys7OzFhYWTU1NSEhItbW1w8PDa2tr0tLSeHh4T09P5eXl6urqVlZWhoaGxcXFOzs7t7e3Y2Njh4eHjIyMWVlZq6urpqamnJycWFhYLS0tfn5+np6eS0tLHR0dYmJii4uLsLCwTk5OUVFRqampbGxsIyMjj4+PdXV1RkZGv7+/dHR0c3NzNDQ0ZGRkKysrubm5goKCl5eXbW1to6Ojurq6MDAwcXFxNjY2rKysvLy8wcHBQUFBr6+voaGhaGholZWVmpqafX19YWFhkZGRx8fHiIiISkpKhISEfHx8mJiYISEh2NjYqKioAAAA////AuIq4AAAAP50Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDY2QxxAAAVLElEQVR42uydd1wTyRfAIWoi0UvEBIiISuggHURA6QgIVhRBQMXee+/17L333nvv9exdz3bnnd5Zrvdefrufzy/ZndlsmYTdsAHWY/6D2TZvvjPz3pv3JnZ4RakoRLGrEEFFqUCholSgUFEqUKgoFShYKPLj93+65OCQ131A2+AKFP6zRT0ybmqh/dvssQWumMqvQ6MJtyarK1D4DxZZv2OPOyT2ONfZpU1Y6qU6SsxQChfP0Px3UYh/XolHaX920xrv3u9QyzV2Z/zqP2tLdXzgkjlaIwx7/uwq8EkZfORX6cTvs6u6VFeXaxTi6mM8i8/5n4+/KyTozjbGQvvo6f863YtoparvdGGPcuYrP6xKzImwdwMFQ1HW2697F0hIicWwBkPZE8VMspH23jZCwVDqx17QlVsUes7KG66lPtXPnlMezw+gtaVp0j7pq1besZ4YVknO/ndwPtnGWEFrxL+ZM2OVpqmzGUeAzQ4q6QI8maEupygYSvIg6kNjanHKyIzUHy97mXC446yQOAlOywzN+KcTt6JNc3KN6BMh7IHuy1VQOiH7OAJs3TbryZlIkwAfb1KUWxTwYQ3gZ1Yzc2HXEdVWUZNc+2RJk6D/1DgLOqCqrpEd1jhV4CNnPIbCeU+GvuLU2iQfeE3AI1n5NSZbFYeCYSXNmgsvUi0PlDIKg10NbXBFKnCBc8gWHhZqUk4tDgVDuWBPTQy9yi8Kg7XFooDjHosoFvIlbH3ro4xNmOOLrOzjSer6Qh0u3XmggLtvo5SyXEV5RSHHhwcKuOxTqP+4LZAuCiOIFkxA90UWKQjVrwIfOoAPCnjvXChA19flFYWspnxQwN3vQqzHDJMsCiuJBmxFVzbxItuXL/ChWbxQwKsP8gTXje1ZTlGwq8ILBdypI7XaSdWMiCDH/SJ0rXoK8C0ItP6r8kMBb9IXXrhRI20U8KrwQp9+EkWhLfn9G9QW9b8xKbZBAZ8Il4hxbSWOQgTlgqgkURSukp//UI6uXkxWdwizEQr4D3CJcJA4CvjXruDKKaelicIs8vODfM2YAkFEqWkzFLKgf2asQuIo+I6CLup10kQhEyxwrdHVO12IkqKzFQqKbHBl4wyJo4Dvho3uIVEHE/j8OFGfyh8F3AFcqf1b6ij0h42+KE0UcmCf6csIhZz65dLlaAUKbWCjO0oThWHg8xu0LCMUWvqDS8OljoLaDVzaVy5NFgrA92/XlQ0K3s3ApXOljgIOL60hURSWge9vHl82KLgUgkvtJY9CgMRnhf2w1yZ4lAkKbQaCSwdKHQUPKspFmiTgmmi4JfRjmaAwsuBd0RX6wUYPkigK+FK4p+bXuSxQmDgO7kJIHYXvYaNvShUFl0mwCbGKMkDhQxD85pkncRQifoDhK19JFQX8c+g8x87qSx+FV+DKdgMkjkIK1H/9wySLQvXrVIB3nKa0UXCvAy2YYRJHgXI2/iGXLAp4rUjYivlZpY3CV+1gbDQubRQ8DsM2D8YlXJypzIRGM0oZhZpwC+J7iaOwFgZBFqZIGQWPH6iI3S2yUkXhAHTW/tNE2ii41IBN/lvaOVK+L2AEieuT0kShDdyi1n6GSxoF90GQ6bl6KYOgbzP6NpXPFLBeXWoo+EKvN3b4tKRRkE2AJCh/Q1ua3vF28bXcrfoUXeeJXU7xGc+Tu9jZ2YV5W+811qT+4k9PaRXDFuKHgvsv8DIvdNyKzqWtXUZrX+sEWMuuCw+jRJ08I8MgwCL2EQmCUHAZDhviWpf7hpazLheCnXjHkJvrzfVUExdQqtNvbuiQRtj60dvPmbXuNF0GLw4pDDVldUcd7rXwQC2hElNsCjJOCG4h+VR+Sjen0kFhWjdqJrrCbV7LJSsbgaE2v+PMo+ae4wQFSM9Q00x0GOVHWKjbj5rdcFV0mV0pxJ7yqWAB9rFbM9fP0AlG4VT3Qsoad2B76XzXJh00SlYZ+aKZ8VGeTedcm46cd2t6gWJKadeN7tgYTjfYuK3IlPbAiTendFByctQ9/caMOlFdiL54oJtxO03VzNndaRd8ittuWSmg4J7pBRclZV22bHxH3I4mBFgwdp5RgKpx2S06oZ6y8yEU4GZao1Y6QtVH5bgIeaaUzG78nA7c8xNUTfdM2X1aCAqKU3GjqI5oeok15COywl2J/t9yYdreWu+PjzQ2WRs0GJVZSeUNwolFHbYxlP5xbs+4y4Tu5aH5GNYuavixswvuPc8P8m/nabphzCn+Pda6FZH743aoyPBHzyAqE36orVGQdxqaSHXEuJusTG1d1ZrEYHVstT+sU+ejuwuIeSv7KmJqrQ6NUawy/FfYRh+6ALWHE7j9l/rA0TCZR3Z8NfPXex/nT/JvR7uh+V4kCmm1OcVu/bXcpOaU7FUDB7Dm8K7tiQ0WbeIb8I/p14mGuSXVLh4F93temNY/fEOvRD840h/sZN3TdZthJGu7DYBNVE9ev6JmNJzfP+Gd1x1xhYwaWbWbVGd+q0J5mtaLhUJ4Q44AM44Mzr29x8R60ADWnNC1EtF2VT0YWDXjIjnukmqri0Uh+Ik/pvTvuHXreQqIk+wFz/tTQ139b0ebBNj/r0RHKMAbaiQKxR8is5htD7skkvNevukDZJ8B5SinOBScJqiw6B4Elh92gEn7HzBv2UtkFA1izjGaf2cBD+57fKOR5CvIxrsugSwPpZrlhTh1p6sdUfoJQqHY4vrchd1Rf5BjLIm20oFg4qj+xaHgstJw1Szj12ucqU5cyHoBkQM/laUn7lsItuVO4tag0OFjjmfJCUyzfelLlAJklvjct4yCdx0sdBsUTQuIaTRDFdlLhNtHF3HlP2CXcSAs5qsvVgLa0gjTUNthOiKDq67WBfkKYqLg/4qjCtUCPZJIH8sRh8gvc7xvGYWe2Zj2Ljwk5ndYVchQMxTEmKnCXW10/ScYZ5+ZQlFQRr/YNbszZwQmg6MZfD5iqnljQdDWPksoFKVhkZWpvYzpzWEdYyw8JYQyCaWEBr4fosWW8FQYHUD4VXvak7qGU9N2HqdpYGobJRIKbtHZW7p7c4hLjiU7PXodcyTfAI7xDEso9ExXFcymtJO9jeCr6ABp+pAb8kihrIlRYpvQKBQ6oMuC1y/j9yJ6QwOH8naWUbEWjLfbCeZRqBWDNacvIZSx+gXtTSnEcQjYPLR16tTdaw0/FBaQuojneYbbI34efGcDzqb7Ccy8DM2iMPYvpPxmZr4+Eo+0+scDFWwrS7qbSKvPM11mHoVOU1T2tANi5Gdg3Xi66UcqSF+iHWkJnwcdtW4Pgl1yDgJXAluD0KSRiqZ2iMYcCl1DPBsxckjbw7rbtH5fTyq7AZ+bMwr4nQDTvzFQCrow/3+hMXxp1GrWLcAftE3UPQiOkw8YZgVsP5d7CDK3ko5CkxhsIOOj+8C6Q7R/rgGGxQgzTlVvd1FQ0KfBSHJO1WhgEYw7ZwYFTS9VFLNfesC6KTS9Iw787+Dmkmj4siiwzLVg13xAzeBBLH0O9MVSW6LQuxq4bxtn5cgB822DBDMoyC5iUe8zbpkN69Joc/RPMDGvslrM7Sh22Qx8V44TuR6VORhdQeWi0MOVHX5OnYBYh6ZBVaY0u49LcB73UximzZmkZdQ5VNhlhroQTO4cKTfbEoW1UBNryBVgOqhrr0GjMFRbhZXWUxlDJCYMprS99u42RAE67GogTreDuYHKkUgUevm4sk/xQaKwjjo9ThtT1dpNMPdo84meCXOgz6Qdw4odSca3RPe0IQr6CeC2dMS+Qy40dDshUfiikR/bM4ZEIZ5yNdevuUZnKxRSChBqCqcP6yJRCMXOVOeDQvU5dFu2lnW7iNCBsAfl1T46hnKa0FfequQKN0pvQxSOw32xIYjKlxDR2UgUqqgua/igENyN7hWabCMUKgP7rN0b1MbTDVS8v+nAurEcHzsSBfx1A5pFFj3EO8KKSSERZsEg+/UadHRi82jei6WkBt8HtyEKf8PbPkIJ0AtuaMtRKGADOW4xJAp4qitNgHfGj9TYAoW7FqPC4OQX4IFE4TucHwq6XIZ5HjVT+CZ4Btw/QZshOuoUQiwpkKU1Nm5oSxSgnqJEmUGyB6A2choKBSU3Ig6NAp6rZXi50AIsIQrQpZGONPo/gy/PQqGQhPNEgXZeJGjLQqH646/w1i7oet+V1MNz4WpaNJ/0QnrYEAV3cAgYlo2shmPAbT8KhcsKvigoBqmYo2lJsNgouMOt5S3I6g/hq5eiULjHGwXc4xhze1pZ55owGHZAg9RcQGZnuJhhq6Aq1p3YSNRewW2IwkgYeX0dWX0V47oWTCjE4XxRwIN/8GMKcM4tX3FRiIePRp989w3claU70jib1DxQwPV9OjAnBu2hhgJEroDu5SCz8UGrKVkVAD9IPXJjINmWKLwP1aD26Gr40Fbmt6N4oYB79GjMFGBA0hqFmChAoxi7hKxuCftvl6yEKBjMkRBW3Irf1C68jQnfL8FN9cxHuWRS6+lAYnenJfG36ghuSxTWw5y5usjqYVSYVUlRwPGsNFbcSsCZ2hrxUKAONp6NdgnD6a9bcolRwBWZ/uzd3kt8d6dT3oJbhpt3Umsuq+heW30r/ltR1qMAvT/aOPQ3wYdOKjkKuKIFW4CNz7qLhkImZvGIK297hP/EWhSM8RerWG1J43lYRjI8QjV8pwXFJ4Z67tIIPIM0wH6zLQpQgK5mPJrQCmwkLzkKOD55gw9LgJ/Ei4XCzFJFAdcfiXFlNmXPLF7ZepSuYDHgqR+VYL3qvm4rsTxcV5ctCo5Q5Q8UAwVckRPOXGY9I53V4qCwsHRRMAaDprsx2tJ0CK+0eHgE7R2LGUn3m1IT8iZiMq3D//wF61BYAFEYja6HHddILwoKhqnPOZsJQ4MWMlFQWAIf+JNlXeFbd5FQMEiiRzNGW5SV+IgeKjVuFjMeIs5SqiPhRfW/gNsYhU1wc2ATslqNcY/qKRkKOJ7QYxJDf1Q+7S0GCt/B532AtiCixbMgaDbykygG11/wWCOOw4XlqsXLAh8yhNQCtzUKR8Ac54k+Cog6FzFcPBQMAlzI0B+1J3QioJABH/cUWf0b7IANahFRwPEmzxlGclzxH9q7I7+T9z1u0J67XW9zFCi/wl9o7UU0vwJrZuhFF2DoVRFQSLbsbRyNCsAVAQVctzqWNskVuhT/pbfgtcVkKp6jwiuxREEnYZTQ2zjVsrv2nrgoGAR4mLYt8cJbxD2IRKSF38LiHkQJUDCoP0vnm5rC47BpD7CoqPYXp9NTuSLz9tkeherQ95WGW9rEUfYXGQUcd/rdBL3bbhFQ2AB21Ae2QdUuh1qqh+go4HjDZ5T6+CWPkwo+Bw6kZ8VsXuhNv/QV42JzFKjNkQDUXXoYtfp4pOgoGDQ5k2F5J4KGwrlVVqEwGmgDfkdRI3cK6qQZsVDAd/5M5Z3x2EfWAG1BW9zvgyWkmZQFnRUonBSU4f0a3ob6yZjTUFYPdDZAAZcfc6O/HaKQ6mPVsZK+BRZMiIlQN1liExRo8b3f8bjYG/xKZvMullfRPFqmcSZ/SXwNbxouJJkX//cOuO1PlFKJOutIPBRwzcdwXlhLQwGGqwo9gnoDFACibimYk/1SbISCHB788R2vcUumA3jWtHR6QWAfH1UzKj1ozBvegvgfvOe8oF/m1S+zQNAKUNfMxTYo4L23gctH0FD4AO7FRAo75uEASII+eJw7vkBInSfTvBARBdybVFt9VvObw0HC1nLzU7jLXdd2D4vyqImzDu/zkvLgLZEuggSYqjT7kwQ74abIEI2NUMCn25vC6QAK6m8pT+5+QS2RnSQVRzdumOZmEAFQ0LOkKHT+0NyiTY6beTz9w0XVSBN0Rxsz2sfVedqgEXJcf51iIZ/niYSyWEodfylMgBvBfSc42x0fgcDRPebyIHij0DPVnADJJKT6viYU1pkss1hhK0RbkCxehZPTn4b22VmBwizX3WaakkOMKd6/iqxoQfo/s3NQtfEr3aKXEtNAAvVrmlgLfs/+xhEVHclrZmtgJjzUAwbZ3cJLisKScQ5m4kG/MvU5icLqZjTn0xBhS0QcmOEW6dH+pVYeJUVBk2+wu6siu2SAcfgq1/D/2lpTiXAa10fsHxFTDIhVev0JBTbtBRUUsZaX13AgLUu2j7Aw3J/MBDKBoyVVrJM+rUHBoJB8UhX5cuJHmZteAChk3f7EkeF6b/RshwCw5cCma8oM3/YFqfbp7MlYOAouxkfNf474BTgNoXTtEHJmt6zf+LEGGavG/LLfG0418hmpN+fe6Ti0kwm3nIOhoAQVGxPxTchcR096SE2j8O0Cvki+jPRkNGfmvE3ORgvQChTUkQaNzX8F4jwfvXF5ctuoAyjEcQ/oiRJiEMnukivrKHpfuQPddC7HXhaOQlViClX983Qaa+KJ+N2ojiROFrak4SlvVoQM7OCmtI+ZeuJSjxWLl9dMS1u+oDbDyRNxvCEsxaqBztz8+bdCvie4F2m+1aCrPMl/EIq8qi9bH7cChSLgPh3SkrXOyjKNPoR6LnAPYsR8R3Z5u1OQQZRL+qdiWtI0cYL0+sO5chSOAuW/HvPelU6mDlNMX2QY3tqO1pwqq26TcWRB+w1bqlU72Sp31pF9yXgJyhWO/ByF/WpKoAPh1VFNMbEQvIV0iCVx5kIrUJhFZQ3kO7uYBKibdtEwlLTDgSvTgELCRDt2qS0sG033P9LD38wZ/GMdeeZraPveuAgoJNGGW8HDvJeTDdpH9X63lhtzh5THEvCyLk4c+dntE/aEiO/JbePI/qTg1WtIQ1w5hGtUC0dBv5we97WyxYHWhhVVFnbroj/jFXbiSMP7EelZtM8b/ab/AnLb0GcX0q8nHIWivHA/9DkmPlPL2U98W11SwLbx2/GjUw88CSeWXGU+KnHXilnBOy8m1IwAL5peIRIKuK4oL504r7FdAx/jIhcwr9VEtO45qB4oiFyTr2HdDuZ00nvaj61G+TMzfNzGpDu0luHvStH1XJE+jhSgnxGE0BsbjiJdYR6voJBSLQjwGFOtcg+bvSzbnxkLiI3pdrMfTeO2E68xwfHOuddj+taocT7pWPdv9ppbY/QKUBDWoRrWcYNG1L5hWbN/3pGUWMNQEg89upczLRl/t4pvP+cvznxraN75B6+6rxtWIgEi/DCnw1Kvjf+0WjdCgLseLRwwjWkc2IndHrlcbtODwNWGF8g1+LtbbC1AjVGAKMzs8IpSUSpQqCgVKFQURPm/AAMAKbXxEd3M+5MAAAAASUVORK5CYII=" />
                        </defs>
                    </svg>
                    <p id="footer-trademark"><>&#9400;</> PONS & PONS 2023</p>

                    <div className="footer-legal">
                        <a>PRIVACY POLICY</a>
                        <a>TERMS OF SERVICE</a>
                    </div>
                </div>
            </div>
            <div className="footer-middle"></div>
            <div className="footer-right">
                <ul>
                    <li>
                        <a>ABOUT</a>
                    </li>
                    <li>
                        <a>CLASIC FLAVOURS</a>
                    </li>
                    <li>
                        <a>SPECIAL FLAVOURS</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>
                <div className="social-media">
                    <img width="30px" src={igIcon} />
                        <img width="30px" src={fbIcon} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;