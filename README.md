## A Note About Feature Requests and Bug Reports

This extension helps you generate personalized LinkedIn connection requests on shorcut press.

Current default shortcut: `Shift+Command(or Ctrl)+E`

Demo:

![2024-08-03 10 35 32](https://github.com/user-attachments/assets/b78af7ce-d68b-4cfa-a1ff-f7caf62170b0)

---

## Usage / Installation Options:

-   **Fast and simple**: Chrome Extension - [Get it here](https://chrome.google.com/webstore/detail/linkedin-connection-request-text-generator/your-extension-id)
    -   Feel free to install, use, and then immediately uninstall if you just need a single use.
    -   No data is collected.

### Example Templates and Use Cases

1. Operations leaders

```
Hi {{first_name}}, noticed our mutual connections and that you're {{a_an}} {{current_title}} at {{current_company}} ({{company_relationship}}). My co-founder and I are developing solutions specifically for operations leaders. Could we interview you about your challenges in a brief 10m call soon?
```

2. Recruiting platform member

```

```

3. Recruiting professionals

Hi Shirley, noticed you are a recruiting consultant and work w Sierra. My friend Andrew (Andrew Duca, also 2nd time founder) and I are currently researching problems of recruiters (in search of a startup idea). We'd love to interview you about your experience and problems on a brief 5-10m call

## Troubleshooting

When in doubt, refresh the profile page before using this tool.

### Troubleshooting - Debug Log

If I'm trying to assist you in solving an issue with this tool, I might have you share some debug info. Currently, the easiest way to do this is to use the Chrome developer's console:

1. Append `?li2jr_debug=true` to the end of the URL of the profile you are on.
2. Open Chrome dev tools, and specifically, the console ([instructions](https://developers.google.com/web/tools/chrome-devtools/open#console)).
3. Run the extension (try to generate the connection request), and then look for red messages that show up in the console (these are errors, as opposed to warnings or info logs).
    - You can filter to just `error` messages, in the filter dropdown above the console.

## Development

> This project was inspired by the [JSON Resume Browser Tool](https://github.com/joshuatz/linkedin-to-jsonresume).

### Building the browser extension

`npm run build:browserext` will transpile and copy all the right files to `./build-browserext`, which you can then side-load into your browser. If you want to produce a single ZIP archive for the extension, `npm run package-browserext` will do that.

> Use `build-browserext-debug` for a source-map debug version. To get more console output, append `li2jr_debug=true` to the query string of the LI profile you are using the tool with.

### LinkedIn Documentation

For understanding some peculiarities of the LI API, see [LinkedIn-Dev-Notes-README.md](./docs/LinkedIn-Dev-Notes-README.md).

### Debugging

Debugging the extension is a little cumbersome, because of the way Chrome sandboxes extension scripts and how code has to be injected. An alternative to setting breakpoints in the extension code itself, is to copy the output of `/build/main.js` and run it via the console.
