import "./SelectStyle.css";
import cn from "classnames";
// export default function SelectStyle({mode}){
//     return(
//         <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
//             こんにちは世界
//         </div>
//     );
// }

//classnamesライブラリを使用するとカンマ区切りに整形できるから空白区切りよりはミス起きにくい
export default function SelectStyle({mode}){
    return(
        <div className={cn('box', mode ==='light' ? 'light' : 'dark')}>
            こんちは世界
        </div>

    );
}