import * as S from "./styles";
import {formatCapitalize} from "../../../util";

export default function Breadcrumbs() {
    const origin = window.location.origin;
    const splitUrls = window.location.pathname.split("/").filter(function (x) {
        return x !== "";
    });
    let builtUrls: string[] = [];
    let tempPath: string = "/";
    for (let i = 0; i < splitUrls.length; i++) {
        tempPath += splitUrls[i] + "/";
        builtUrls.push(origin + tempPath)
    }
    let urls = [];
    for (let i = 0; i < builtUrls.length; i++) {
        urls.push([builtUrls[i], splitUrls[i]])
    }
    return (
        <S.Container>
            {urls.map((path, index, arr) => (
                <S.Breadcrumb key={index}>
                    <S.Label
                        active={path[0] === window.location.href}
                        disabled={arr.length - 1 === index}
                    >
                        <S.Link
                            href={path[0]}
                            active={path[0] === window.location.href}
                            disabled={arr.length - 1 === index}
                        >
                            {formatCapitalize(path[1])}
                        </S.Link>
                    </S.Label>
                    {!(arr.length - 1 === index) &&
                    <S.Separator>
                        {/*&#8250;*/}
                        /
                    </S.Separator>
                    }
                </S.Breadcrumb>
            ))}
        </S.Container>
    )
}