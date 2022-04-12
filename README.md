# Graph Music API

## Introduction

Graphql API that powers [SpectreFM](https://spectrefm.com). Combines data from TheAudioDB and Last.fm APIs and produces normalized data for easy use.

## Notes

- This project uses Planetscale database service and its branch/merge request system instead of Prisma migrations.

```bash
    // Connect with proxy
    $pscale connect <DATABASE_NAME> <BRANCH_NAME>
```
