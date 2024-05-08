import React, { ChangeEvent, useEffect, useState } from 'react';

type ProfileStatusType = {
  status: string;
  updateStatus: (status: string) => void;
};

export const ProfileStatusWithHook: React.FC<ProfileStatusType> = (props) => {
  let [editMode, setEditMode] = useState<boolean>(false);
  let [value, setValue] = useState<string>(props.status);

  let onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target ? e.target.value : '');
  };

  useEffect(() => {
    setValue(props.status);
  }, [props.status]);

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus={true}
            onBlur={() => {
              setEditMode(!editMode);
              props.updateStatus(value);
            }}
            value={value}
            onChange={onChangeStatus}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={() => setEditMode(!editMode)}>
            {props.status || 'No status'}
          </span>
        </div>
      )}
    </div>
  );
};

/*
export const ProfileStatusWithHook = (props: any) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let changeStatus = (e: any) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {
                !editMode && <div>
            <span onDoubleClick={() => setEditMode(true)}>
            {props.status || "No status"}
            </span>
                </div>
            }
            {
                editMode && <div>
                    <input autoFocus={true}
                           onBlur={() => {
                               setEditMode(false)
                               props.updateStatus(status)
                           }}
                           value={status}
                           onChange={changeStatus}
                    />
                </div>
            }
        </div>
    )
}*/
