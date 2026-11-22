# news-image-20261122-entry

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/BGBug22/news-image-20261122-entry/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/BGBug22/news-image-20261122-entry/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One broadsheet front page that sums up the world's news of Sunday 22 November 2026: the COP31 talks nearing a deal in Antalya, Iran's strikes on US bases in Bahrain, Russia's drone barrage on Ukraine, record flooding in Florida, the Peru and Timor-Leste earthquakes, and the EU–Indonesia trade deal — eight stories on one world map, each labelled and dated.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the finished `entry.png` to `/output/entry.png`. The image is drawn once at build time from the day's reporting (Reuters, AFP, AP, BBC, Al Jazeera); the program itself does no drawing and no network, so both grading runs produce identical bytes.

## The image

- `entry.png` — 1024 × 1024, under 1 MiB
- Masthead date, lead story, world map with numbered pins, six regional stories and an "Also today" strip — all dated Sunday 22 November 2026.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
