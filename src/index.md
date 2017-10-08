---
title: Home
layout: layout.html
order: 0
---
# Machine Learning Hardware Reading Group

For announcements, subscribe to the mailing list by sending a message to <cslrg-l-request@cornell.edu>.
Papers and comments are stored on [the COECIS internal GitHub instance](https://github.coecis.cornell.edu/csl/mlhwrg).

You can [subscribe to a calendar][ics] for this schedule.
And you can [edit the schedule][edit] on GitHub.

{{#with (lookup schedules site.current) }}

Here's the schedule for the current semester, {{ name }}.
We meet every other {{ day }} in {{ location }} at {{ ./time }}.
You can also see [archived semesters][archive].

<ul>
{{#each meetings}}
    <li>
      <time id="{{date day 'YYYY-MM-DD'}}">{{date day 'MMMM D'}}</time>:
      <strong>{{title}}</strong><br>
      led by {{who}}
      {{#if details}}<div>{{{ markdown details }}}</div>{{/if}}
    </li>
{{/each}}
</ul>

{{/with}}

[edit]: https://github.com/cucapra/cslrg/edit/master/src/schedule.yaml
[ics]: calendar.ics
[archive]: archive.html
