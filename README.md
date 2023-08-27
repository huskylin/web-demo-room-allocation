# Custom Input And Room Allocation Page using React.js


## Dependencies
* react.js
* font-awesome


## Usage
1. To install the dependencies, run    `npm install`
2. run the code     `npm start`

## Example
``` JSX
 <CustomInputNumber
              min={0}
              max={10}
              step={1}
              name="myInput"
              value={0}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              disabled={true}
            />
```
``` JSX
 <RoomAllocation
            guest={10}
            room={3}
            onChange={handleInputChange}
          ></RoomAllocation>
```
for more info, please check the demo page

## API
### CustomInputNumber
| Property | Description                                          | Type                    | Default   |
|:-------- |:---------------------------------------------------- |:----------------------- |:--------- |
| min      | Minimum value of input                               | Number                  | -Infinity |
| max      | Maximum value of input                               | Number                  | Infinity  |
| step     | Specified legal number intervals                     | Number                  | 1         |
| value    | Set a default value                                  | Number                  | 0         |
| onChange | Callback function, can be executed when value change | (name: String, value: Number) => void | -         |
|  onBlur        | Callback function, can be executed when component on blur                                                    |       function(event)                  | -          |
|     disabled     |      Set component that cannot be edit                                                | boolean                        |     false     |

### RoomAllocation
| Property | Description                                                  | Type                                                        | Default |
|:-------- | ------------------------------------------------------------ |:----------------------------------------------------------- |:------- |
| guest    | Number of people for whom rooms need to be assigned.         | Number                                                      | 1       |
| room     | Number of rooms needed for everyone                          | Number                                                      | 1       |
| onChange | Callback function, can be executed when edit room allocation | (Array<{id: Number, adult: Number, child: Number}>) => void | -       |


