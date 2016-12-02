# Progress bar

In this sample we are going to evaluate different progress bar options to see which one adjust better to our needs and the simplicity/complexity of each solution.

## Html 5 tag

```html
<progress max="10" value="5"></progress>
```

## Bootstrap 3 CSS classes

```javascript
function calculatePercentage(currentValue: number, maxVale: number): string {
    return (currentValue * 100 / maxVale) + "%";
}
```

```html
<div className="progress ">
    <div className="progress-bar active progress-bar-stripes" role="progressbar" aria-valuenow="5"
        aria-valuemin="0" aria-valuemax="10" style={{ width: calculatePercentage(5, 10) }}>
    </div>
</div>
```
