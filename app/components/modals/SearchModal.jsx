"use client";

import { useCallback, useMemo, useReducer } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { formatISO } from "date-fns";
import qs from "query-string";

import useSearchModal from "@/app/hooks/useSearchModal";
import { initialState, reducer } from "@/app/reducer/searchReducer";

import Modal from "./Modal";
import Heading from "../Heading";
import CountrySelect from "../input/CountrySelect";
import Calender from "../input/Calender";
import Counter from "../input/Counter";

const STEPS = {
  LOCATION: 0,
  DATE: 1,
  INFO: 2,
};

const SearchModal = () => {
  const router = useRouter();
  const params = useSearchParams();
  const searchModal = useSearchModal();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { location, step, guestCount, roomCount, bathroomCount, dateRange } =
    state;

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [location]
  );

  const onBack = useCallback(() => {
    dispatch({ type: "ON_BACK" });
  }, []);

  const onNext = useCallback(() => {
    dispatch({ type: "ON_NEXT" });
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    dispatch({ type: "SET_LOCATION_TO_STEP", payload: STEPS.LOCATION });
    searchModal.onClose();
    router.push(url);
  }, [
    guestCount,
    roomCount,
    bathroomCount,
    dateRange,
    location,
    step,
    searchModal,
    router,
    onNext,
    params,
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return "Search";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where do you wanna go?"
        subtitle="Find the perfect location"
      />
      <CountrySelect
        value={location}
        onChange={(value) => dispatch({ type: "SET_LOCATION", payload: value })}
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
  );

  if (step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        <Calender
          value={dateRange}
          onChange={(value) =>
            dispatch({ type: "SET_DATE_RANGE", payload: value.selection })
          }
        />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Counter
          title="Guests"
          subtitle="How many guests are coming?"
          value={guestCount}
          onChange={(value) =>
            dispatch({ type: "SET_GUEST_COUNT", payload: value })
          }
        />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you need?"
          value={roomCount}
          onChange={(value) =>
            dispatch({ type: "SET_ROOM_COUNT", payload: value })
          }
        />
        <Counter
          title="Bathrooms"
          subtitle="How many bathroom do you need?"
          value={bathroomCount}
          onChange={(value) =>
            dispatch({ type: "SET_BATHROOM_COUNT", payload: value })
          }
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      title="Filters"
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default SearchModal;
