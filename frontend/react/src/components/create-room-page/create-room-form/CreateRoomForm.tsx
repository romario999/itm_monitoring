import { useContext, type ChangeEvent, type KeyboardEvent } from "react";
import { DatePicker, type DatePickerProps } from "antd";

import FormWrapper from "../../common/form-wrapper/FormWrapper";
import Input from "../../common/input/Input";
import { InputNames, type FormData } from "./types";
import {
  LABEL_DATE_PICKER,
  INPUT_ID_DATE_PICKER,
  isValidInputField,
  requiredFields,
} from "./utils";
import {
  blockInvalidNumberKeys,
  isRequiredFieldsFilled,
} from "../../../utils/validation";

import styles from "../../common/input/Input.module.scss";
import "./CreateRoomForm.scss";
import { FormsContext } from "../../../contexts/forms-context/FormsContext";

const CreateRoomForm = () => {
  const { onNextStep, createRoomData, setCreateRoomData } =
    useContext(FormsContext);
  const { name, description, giftExchangeDate, giftMaximumBudget } =
    createRoomData.room;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (!isValidInputField(name, value)) return;

    setCreateRoomData((prev) => ({
      ...prev,
      room: {
        ...prev.room,
        [name]: value,
      },
    }));
  };

  const handleDatePickerChange: DatePickerProps["onChange"] = (date) => {
    setCreateRoomData((prev) => ({
      ...prev,
      room: {
        ...prev.room,
        giftExchangeDate: date,
      },
    }));
  };

  const handleBudgetKeyDown = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    blockInvalidNumberKeys(e);
  };

  const isFormValid = isRequiredFieldsFilled<FormData>(
    createRoomData?.room,
    requiredFields,
  );

  return (
    <FormWrapper
      formKey="CREATE_ROOM"
      iconName="star"
      buttonProps={{
        children: "Continue",
        disabled: !isFormValid,
        onClick: onNextStep,
      }}
    >
      <div className="content">
        <Input
          placeholder="Enter your room name"
          label="Room name"
          name={InputNames.ROOM_NAME}
          required
          value={name}
          onChange={handleChange}
        />

        <Input
          placeholder="Enter your message here..."
          label="Room description"
          name={InputNames.ROOM_DESCRIPTION}
          multiline
          maxLength={200}
          required
          value={description}
          onChange={handleChange}
        />

        <div className="content__group">
          <div className={styles.inputWrapper}>
            <label
              htmlFor={INPUT_ID_DATE_PICKER}
              className={`${styles["inputWrapper__label"]} ${styles["inputWrapper__label--required"]}`}
            >
              {LABEL_DATE_PICKER}
            </label>
            <DatePicker
              id={INPUT_ID_DATE_PICKER}
              format="DD-MM-YYYY"
              style={{
                width: "338px",
              }}
              onChange={handleDatePickerChange}
              value={giftExchangeDate}
              className={giftExchangeDate ? "ant-picker--filled" : ""}
            />
          </div>

          <Input
            type="number"
            placeholder="Type in your budget"
            caption="0 means unlimited budget"
            label="Gift budget"
            name={InputNames.GIFT_BUDGET}
            width="338px"
            required
            withoutCounter
            withSuffix
            value={giftMaximumBudget}
            onChange={handleChange}
            onKeyDown={handleBudgetKeyDown}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default CreateRoomForm;
