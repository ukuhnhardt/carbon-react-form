import React from "react";
import { render } from "react-dom";
import {
  Form,
  Select,
  SelectItem,
  TextInput,
  Button
} from "carbon-components-react";

const App = () => (
  <Form>
    <table>
      <tr>
        <td>
          <Select
            id="select-type"
            defaultValue="placeholder-item"
            labelText="Type"
          >
            <SelectItem
              disabled
              hidden
              value="placeholder-item"
              text="Choose an option"
            />
            <SelectItem value="option-group" text="Group" />
            <SelectItem value="option-ip" text="IP" />
            <SelectItem value="option-geo" text="Geolocation" />
          </Select>
        </td>
        <td>&nbsp;</td>
        <td>
          <TextInput
            id="condition"
            labelText="Value"
            {...{
              onChange: value => {
                console.log(value.currentTarget.value);
              }
            }}
          />
        </td>
        <td>&nbsp;</td>
        <td>
          <Select
            id="select-action"
            defaultValue="placeholder-item"
            labelText="Action"
          >
            <SelectItem
              disabled
              hidden
              value="placeholder-item"
              text="Choose an option"
            />
            <SelectItem value="option-allow" text="Allow" />
            <SelectItem value="option-2fa" text="2FA" />
            <SelectItem value="option-deny" text="Deny" />
          </Select>
        </td>
      </tr>
    </table>
    <div>
      <p>&nbsp;</p>
      <Button>Submit</Button>
    </div>
  </Form>
);

render(<App />, document.getElementById("root"));
