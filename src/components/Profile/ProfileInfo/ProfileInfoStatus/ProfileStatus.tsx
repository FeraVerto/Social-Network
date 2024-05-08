import React, { ChangeEvent } from 'react';

type ProfileStatusType = {
  status: string;
  updateStatus: (status: string) => void;
};

type StateType = {
  editMode: boolean;
  status: string;
};

export class ProfileStatus extends React.Component<
  ProfileStatusType,
  StateType
> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    //setState асинхронен
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(
    prevProps: Readonly<ProfileStatusType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.state.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'No status'}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              onChange={this.onStatusChange}
            />
          </div>
        )}
      </div>
    );
  }
}

//Тоже самое только на хуках
/*export const ProfileStatus = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState(false)
    let [value, setValue] = useState(props.status)

    let onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target ? e.target.value : "")
    }

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input autoFocus={true}
                               onBlur={() => {
                                   setEditMode(!editMode)
                                   props.updateStatus(value)
                               } }
                               value={value}
                               onChange={onChangeStatus}
                        />
                    </div>
                    : <div>
                        <span onDoubleClick={() => setEditMode(!editMode)}>
                            {props.status || "No status"}
                        </span>
                    </div>
            }
        </div>
    )
}*/
