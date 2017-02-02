---
title: Home
layout: layout.html
order: 0
---
# Machine Learning Hardware Reading Group

The schedule:

<ul>
{{#each schedule}}
    <li>
      <time>{{date day 'MMMM D'}}</time>: <strong>{{title}}</strong><br>
      led by {{who}}
    </li>
{{/each}}
</ul>
