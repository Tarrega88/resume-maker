import SizeButton from "./SizeButton";
import SizeTypeButton from "./SizeTypeButton";
import Shutters from "./Shutters";
import OnOffSwitch from "./OnOffSwitch";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStyleProperty,
  editCustomStyle,
} from "../../features/editor/editorSlice";
import SizeInputOrDisplay from "./SizeInputOrDisplay";
import LinkButton from "./LinkButton";
function MultiButtonNumberInput({
  name,
  displayName,
  unitType,
  unitValue,
  unitTypes,
  linkedName = false,
  linkActive = false,
  toggleLink,
  negativeMax = false,
}) {
  const dispatch = useDispatch();
  const open = unitType !== false && unitType !== undefined;
  const currentUnitData = unitTypes[unitType];
  const preferredUnitType = useSelector(
    (state) => state.editor.preferredUnitType,
  );

  const validTypes = Object.keys(unitTypes);

  const max = currentUnitData?.limit;
  const min = negativeMax ? -max : currentUnitData?.minLimit;

  function handleButtons(sign = 1, amount) {
    if (unitType === "auto") return;
    const checkAmount = Number(unitValue) + amount * sign;
    const newValue =
      checkAmount < min ? min : checkAmount > max ? max : checkAmount;
    dispatch(editCustomStyle({ [name]: `${newValue}${unitType}` }));
    if (linkActive && linkedName) {
      dispatch(editCustomStyle({ [linkedName]: `${newValue}${unitType}` }));
    }
  }

  function handleMin() {
    const newValue = min;
    dispatch(editCustomStyle({ [name]: `${newValue}${unitType}` }));
    if (linkActive && linkedName) {
      dispatch(editCustomStyle({ [linkedName]: `${newValue}${unitType}` }));
    }
  }

  function handleMax() {
    const newValue = unitType === "%" ? 100 : max;
    dispatch(editCustomStyle({ [name]: `${newValue}${unitType}` }));
    if (linkActive && linkedName) {
      dispatch(editCustomStyle({ [linkedName]: `${newValue}${unitType}` }));
    }
  }

  function handleInput(e) {
    const targetValue = e.target.value;
    const updateValue =
      !targetValue.length || targetValue < min
        ? min
        : targetValue > max
          ? max
          : targetValue;
    dispatch(editCustomStyle({ [name]: `${updateValue}${unitType}` }));
    if (linkActive && linkedName) {
      dispatch(editCustomStyle({ [linkedName]: `${updateValue}${unitType}` }));
    }
  }

  function handleSetMeasurementType(newType) {
    const newMax = unitTypes[newType].limit;
    const newValue = unitValue > newMax ? newMax : unitValue;
    dispatch(
      editCustomStyle({
        [name]: `${newValue}${newType}`,
      }),
    );
    if (linkActive && linkedName) {
      dispatch(
        editCustomStyle({
          [linkedName]: `${newValue}${newType}`,
        }),
      );
    }
  }

  //TODO 6/2/2024: add in logic for a default value on open instead of the first one
  function handleOpen(objectKey) {
    if (!open) {
      dispatch(
        editCustomStyle({
          [objectKey]: `0${Object.keys(unitTypes).includes(preferredUnitType) ? preferredUnitType : Object.keys(unitTypes)[0]}`,
        }),
      );
      if (linkActive && linkedName) {
        dispatch(
          editCustomStyle({
            [linkedName]: `0${Object.keys(unitTypes).includes(preferredUnitType) ? preferredUnitType : Object.keys(unitTypes)[0]}`,
          }),
        );
      }
    } else {
      dispatch(deleteStyleProperty(objectKey));
      if (linkActive && linkedName) {
        dispatch(deleteStyleProperty(linkedName));
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-lg">{displayName}</div>
      <div className="relative grid grid-cols-[1fr_5rem_1fr]">
        <Shutters open={open} setOpen={() => handleOpen(name)} />
        <OnOffSwitch on={open} flipSwitch={() => handleOpen(name)} />
        {linkedName && (
          <LinkButton linkActive={linkActive} toggleLink={toggleLink} />
        )}
        <div className="flex min-w-[122px] flex-col border-y-[10px] border-l-[10px] border-y-slate-500 border-l-slate-600">
          <SizeButton text="Min" onClick={handleMin} />
          {unitTypes[unitType]?.buttons.map((e, i) => (
            <SizeButton
              key={i}
              text={`- ${e}`}
              onClick={() => handleButtons(-1, e)}
            />
          ))}
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <SizeTypeButton
            unitType={unitType}
            max={max}
            setUnitType={handleSetMeasurementType}
            validTypes={validTypes}
          />
          <SizeInputOrDisplay
            onChange={(e) => handleInput(e)}
            value={
              open && Number.isInteger(Number(unitValue))
                ? unitValue
                : open
                  ? Number(unitValue).toFixed(2)
                  : 0
            }
            unitType={unitType}
          />
        </div>
        <div className="flex min-h-[140px] min-w-[122px] flex-col border-y-[10px] border-r-[10px] border-y-slate-500 border-r-slate-600">
          <SizeButton text="Max" onClick={handleMax} />
          {unitTypes[unitType]?.buttons.map((e, i) => (
            <SizeButton
              key={i}
              text={`+ ${e}`}
              onClick={() => handleButtons(1, e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MultiButtonNumberInput;
