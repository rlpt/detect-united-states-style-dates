# Detect United States style dates

Small function which will return `true` if the browser renders a date in MDY style when using locale format. e.g

01/31/2020 -> returns `true`

31/01/2020 -> returns `false`

# Devices tested

Code was tested by switching devices from UK (en-GB) to US (en-US).

"Worked as expected" means: Detected US style dates when the system language settings was set to en-US

MacOS 10.15: 
    
- Safari, Chrome & Firefox worked as expected

iOS 

- Safari, Chrome & Firefox worked as expected
    
Windows 10:

- Edge & Chrome worked as expected
- Firefox worked as expected but required changing language in browser settings

Android 5.1

- Chrome worked as expected