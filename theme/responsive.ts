const sizes = {
    $small:"768px"
}

export const responsive = (key:keyof typeof sizes)=>{
    return (style:TemplateStringsArray | String) =>
        `@media (max-width: ${sizes[key]}) {${style}}`
}