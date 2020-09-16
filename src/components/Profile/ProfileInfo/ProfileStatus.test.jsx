import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="Freddy Krueger" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("Freddy Krueger");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="Freddy Krueger" />);
        const root = component.root;
        expect( () => {
            let input = root.findByType("input");
        }).toThrow();
      });

      test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="Freddy Krueger" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Freddy Krueger");
      });

      test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Freddy Krueger" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Freddy Krueger");
      });

      test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Freddy Krueger"
                                                updateStatus={ mockCallback } />);
        const instanse = component.getInstance();
        instanse.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
      });
  });