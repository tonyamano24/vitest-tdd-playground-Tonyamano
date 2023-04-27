# Rock Paper Scissors

Write a function name `rockPaperScissors` that takes 2 parameters as choices, your choice and enemy's choice.

The result of the match would be the return value of this function.

If you win, the function would return `You win`.
If you lose, the function would return `You lose`.
If you draw, would be `Draw`.
Otherwise, would be `Nothing`.

- `Rock` beats `Scissors`
- `Scissors` beats `Paper`
- `Paper` beats `Rock`

## Examples

```js
  rockPaperScissors('Rock', 'Scissors') -->  'You win'
```

```js
  rockPaperScissors('Paper', 'Scissors') -->  'You lose'
```

```js
  rockPaperScissors("Paper", "Paper") -->  "Draw"
```

```js
  rockPaperScissors("Heart", "Rock") -->  "Nothing"
```
